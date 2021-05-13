import { useReducer, useEffect } from "react";
import axios from "axios";

const ACTIONS = {
  MAKE_REQUEST: "make-request",
  GET_DATA: "get-data",
  ERROR: "error"
};
const BASE_URL = "https://networkymern.herokuapp.com/postedon/showpostedon";

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, savedjobs: [] };
    case ACTIONS.GET_DATA:
      return { ...state, loading: false, savedjobs: action.payload.savedjobs };
    case ACTIONS.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        savedjobs: []
      };

      return state;
  }
}
export default function userFetchedSavedJobs(params) {
  const [state, dispatch] = useReducer(reducer, {
    savedjobs: [],
    loading: true
  });

  useEffect(() => {
    const cancelToken1 = axios.CancelToken.source();
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    axios
      .get(BASE_URL, {
        cancelToken: cancelToken1.token,
        params: { user_id: localStorage.getItem("user_id") }
      })
      .then(res => {
        dispatch({ type: ACTIONS.GET_DATA, payload: { savedjobs: res.data } });
      })
      .catch(e => {
        if (axios.isCancel(e)) return;
        dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
      });

    return () => {
      cancelToken1.cancel();
    };
  }, [params]);

  return state;
}
