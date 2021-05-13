import axios from "axios";
import {
  HIDE_MESSAGE,
  ON_HIDE_LOADER,
  ON_SHOW_LOADER,
  GET_PROFILE,
  PROFILE_ERROR,
  GET_FOLLOWINGS,
  GET_FOLLOWERS,
  CREATE_PROFILE_FAIL,
  CREATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_SUCCESS,
  UPD_PROF,
  GET_PROFILES,
  ADD_PROFILE_EXPERIENCE_FAIL,
  CLEAR_PROFILE,
  ACCOUNT_DELETED,
  GET_REPOS,
  NO_REPOS
} from "../../constants/ActionTypes";
import setAuthToken from "../../util/setAuthToken";
//Get all Profiles
export const getProfiles = () => async dispatch => {
  dispatch({ type: CLEAR_PROFILE });
  try {
    const res = await axios.get(
      "https://networkymern.herokuapp.com//api/profile"
    );
    dispatch({
      type: GET_PROFILES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Get profile by ID
export const getProfileById = userId => async dispatch => {
  try {
    const res = await axios.get(
      `https://networkymern.herokuapp.com//api/profile/user/${userId}`
    );
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
//Get current users profile
export const getCurrentProfile = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get(
      "https://networkymern.herokuapp.com//api/profile/me"
    );
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

  edit = false
) => async dispatch => {
  try {
    console.log(formData);
    const res = await axios.post(
      "https://networkymern.herokuapp.com//api/profile",
      formData
    );

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });

    //dispatch(setAlert(edit ? "Profile Updated" : "Profile Created", "success"));
    if (edit) {
      dispatch({
        type: UPDATE_PROFILE_SUCCESS,
        payload: res.data
      });
    }
    if (!edit) {
      dispatch({
        type: CREATE_PROFILE_SUCCESS,
        payload: res.data
      });
    }
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error =>
        dispatch({
          type: CREATE_PROFILE_FAIL,
          payload: error.msg
        })
      );
    }
  }
};

export const addExperience = formData => async dispatch => {
  try {
    console.log(formData);
    const res = await axios.put(
      "https://networkymern.herokuapp.com//api/profile/experience",
      formData
    );

    dispatch({
      type: UPD_PROF,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error =>
        dispatch({
          type: ADD_PROFILE_EXPERIENCE_FAIL,
          payload: error.msg
        })
      );
    }
  }
};
export const addEducation = formData => async dispatch => {
  try {
    console.log(formData);
    const res = await axios.put(
      "https://networkymern.herokuapp.com//api/profile/education",
      formData
    );

    dispatch({
      type: UPD_PROF,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error =>
        dispatch({
          type: ADD_PROFILE_EXPERIENCE_FAIL,
          payload: error.msg
        })
      );
    }
  }
};
//DELETE EXPERIENCE

export const deleteExperience = id => async dispatch => {
  try {
    const res = await axios.delete(
      `https://networkymern.herokuapp.com//api/profile/experience/${id}`
    );
    dispatch({
      type: UPD_PROF,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
//DELETE EDUCATION

export const deleteEducation = id => async dispatch => {
  try {
    const res = await axios.delete(
      `https://networkymern.herokuapp.com//api/profile/education/${id}`
    );
    dispatch({
      type: UPD_PROF,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
//DELETE ACCOUNT AND PROFILE
export const deleteAccount = () => async dispatch => {
  if (window.confirm("Are you sure ? This can NOT be undone!")) {
    try {
      const res = await axios.delete(
        "https://networkymern.herokuapp.com//api/profile"
      );
      dispatch({
        type: CLEAR_PROFILE
      });
      dispatch({
        type: ACCOUNT_DELETED
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
};
export const getGithubRepos = username => async dispatch => {
  try {
    const res = await axios.get(
      `https://networkymern.herokuapp.com//api/profile/github/${username}`
    );

    dispatch({
      type: GET_REPOS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: NO_REPOS
    });
  }
};
export const showAuthLoader = () => {
  return {
    type: ON_SHOW_LOADER
  };
};

export const hideMessage = () => {
  return {
    type: HIDE_MESSAGE
  };
};
export const hideAuthLoader = () => {
  return {
    type: ON_HIDE_LOADER
  };
};

export const getFollowings = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get(
      "https://networkymern.herokuapp.com//api/users/getfollowing"
    );

    dispatch({
      type: GET_FOLLOWINGS,
      payload: res.data
    });
  } catch (err) {}
};
export const getFollowers = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get(
      "https://networkymern.herokuapp.com//api/users/getfollowers"
    );

    dispatch({
      type: GET_FOLLOWERS,
      payload: res.data
    });
  } catch (err) {}
};
