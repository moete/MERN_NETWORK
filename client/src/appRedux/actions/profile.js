import axios from "axios";
import { GET_PROFILE, PROFILE_ERROR } from "../../constants/ActionTypes";
import setAuthToken from "../../util/setAuthToken";

//Get current users profile
export const getCurrentProfile = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("http://localhost:5000/api/profile/me");
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,

      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
// Create or update profile
export const createProfile = (
  formData,
  history,
  edit = false
) => async dispatch => {
  try {
    console.log(formData);
    const res = await axios.post("http://localhost:5000/api/profile", formData);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });

    //dispatch(setAlert(edit ? "Profile Updated" : "Profile Created", "success"));

    if (!edit) {
      history.push("/social-apps/profile");
    }
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR
    });
  }
};
