import {
  HIDE_MESSAGE,
  ON_HIDE_LOADER,
  ON_SHOW_LOADER,
  SHOW_MESSAGE,
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE
} from "../../constants/ActionTypes";

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loader: true,
  alertMessage: "",
  showMessage: false,
  error: {}
};
export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loader: false
      };
    case PROFILE_ERROR:
      return {
        ...state,
        alertMessage: payload,
        showMessage: true,
        loader: false
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: [],
        loader: false
      };
    default:
      return state;
  }
}
