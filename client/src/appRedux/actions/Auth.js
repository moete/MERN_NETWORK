import {
  HIDE_MESSAGE,
  INIT_URL,
  ON_HIDE_LOADER,
  ON_SHOW_LOADER,
  SHOW_MESSAGE,
  FOLLOW_SUCCESS,
  FOLLOW_FAIL,
  UNFOLLOW_SUCCESS,
  UNFOLLOW_FAIL,
  SIGNIN_FACEBOOK_USER,
  SIGNIN_FACEBOOK_USER_SUCCESS,
  SIGNIN_GITHUB_USER,
  SIGNIN_GITHUB_USER_SUCCESS,
  SIGNIN_GOOGLE_USER,
  SIGNIN_GOOGLE_USER_SUCCESS,
  SIGNIN_TWITTER_USER,
  SIGNIN_TWITTER_USER_SUCCESS,
  SIGNIN_USER_SUCCESS,
  SIGNOUT_USER,
  SIGNOUT_USER_SUCCESS,
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  CLEAR_PROFILE
} from "constants/ActionTypes";
import axios from "axios";
import setAuthToken from "../../util/setAuthToken";
import { compareSync } from "bcryptjs";
import {
  ADMIN_LOGIN,
  LOGIN_FAIL,
  REGISTER_FAIL
} from "../../constants/ActionTypes";
const setUser = payload => ({ type: "SIGNIN_USER_SUCCESS", payload });
//follow user
export const followUser = id => async dispatch => {
  fetch("https://networkymern.herokuapp.com/api/users/follow", {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": localStorage.getItem("token")
    },
    body: JSON.stringify({
      followId: id
    })
  })
    .then(res => res.json())
    .then(data => {
      dispatch({ type: FOLLOW_SUCCESS, payload: data });
    });
};
//unfollow user
export const unfollowUser = id => async dispatch => {
  fetch("https://networkymern.herokuapp.com/api/users/unfollow", {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": localStorage.getItem("token")
    },
    body: JSON.stringify({
      unfollowId: id
    })
  })
    .then(res => res.json())
    .then(data => {
      dispatch({ type: UNFOLLOW_SUCCESS, payload: data });
    });
};
// Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  } else {
  }
  try {
    const res = await axios.get("https://networkymern.herokuapp.com/api/auth");
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};
export const logUserOut = () => ({ type: "LOG_OUT" });
export const fetchUser = userInfo => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify(userInfo);
  try {
    const res = await axios.post(
      "https://networkymern.herokuapp.com/api/auth",
      body,
      config
    );
    dispatch({
      type: SIGNIN_USER_SUCCESS,
      payload: res.data
    });
    /*if (res.data.user.role === "admin") {
      dispatch({
        type: ADMIN_LOGIN
      });
    }*/
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error =>
        dispatch({
          type: LOGIN_FAIL,
          payload: error.msg
        })
      );
    }
  }
};

export const signUserUp = userInfo => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify(userInfo);
  try {
    const res = await axios.post(
      "https://networkymern.herokuapp.com/api/users",
      body,
      config
    );
    dispatch({
      type: SIGNUP_USER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error =>
        dispatch({
          type: REGISTER_FAIL,
          payload: error.msg
        })
      );
    }
  }
};

export const userSignUp = user => {
  return {
    type: SIGNUP_USER,
    payload: user
  };
};

export const userSignOut = () => dispatch => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: SIGNOUT_USER });
};
export const userSignUpSuccess = authUser => {
  return {
    type: SIGNUP_USER_SUCCESS,
    payload: authUser
  };
};

export const userSignInSuccess = authUser => {
  return {
    type: SIGNIN_USER_SUCCESS,
    payload: authUser
  };
};
export const userSignOutSuccess = () => {
  return {
    type: SIGNOUT_USER_SUCCESS
  };
};

export const showAuthMessage = message => {
  return {
    type: SHOW_MESSAGE,
    payload: message
  };
};

export const userGoogleSignIn = () => {
  return {
    type: SIGNIN_GOOGLE_USER
  };
};
export const userGoogleSignInSuccess = authUser => {
  return {
    type: SIGNIN_GOOGLE_USER_SUCCESS,
    payload: authUser
  };
};
export const userFacebookSignIn = () => {
  return {
    type: SIGNIN_FACEBOOK_USER
  };
};
export const userFacebookSignInSuccess = authUser => {
  return {
    type: SIGNIN_FACEBOOK_USER_SUCCESS,
    payload: authUser
  };
};
export const setInitUrl = url => {
  return {
    type: INIT_URL,
    payload: url
  };
};
export const userTwitterSignIn = () => {
  return {
    type: SIGNIN_TWITTER_USER
  };
};
export const userTwitterSignInSuccess = authUser => {
  return {
    type: SIGNIN_TWITTER_USER_SUCCESS,
    payload: authUser
  };
};
export const userGithubSignIn = () => {
  return {
    type: SIGNIN_GITHUB_USER
  };
};
export const userGithubSignInSuccess = authUser => {
  return {
    type: SIGNIN_GITHUB_USER_SUCCESS,
    payload: authUser
  };
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
