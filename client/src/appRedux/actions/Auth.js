import {
  HIDE_MESSAGE,
  INIT_URL,
  ON_HIDE_LOADER,
  ON_SHOW_LOADER,
  SHOW_MESSAGE,
  SIGNIN_FACEBOOK_USER,
  SIGNIN_FACEBOOK_USER_SUCCESS,
  SIGNIN_GITHUB_USER,
  SIGNIN_GITHUB_USER_SUCCESS,
  SIGNIN_GOOGLE_USER,
  SIGNIN_GOOGLE_USER_SUCCESS,
  SIGNIN_TWITTER_USER,
  SIGNIN_TWITTER_USER_SUCCESS,
<<<<<<< HEAD
=======
  SIGNIN_USER,
>>>>>>> origin/content
  SIGNIN_USER_SUCCESS,
  SIGNOUT_USER,
  SIGNOUT_USER_SUCCESS,
  SIGNUP_USER,
<<<<<<< HEAD
  SIGNUP_USER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR
} from "constants/ActionTypes";
import axios from "axios";
import setAuthToken from "../../util/setAuthToken";
import { compareSync } from "bcryptjs";
import { LOGIN_FAIL, REGISTER_FAIL } from "../../constants/ActionTypes";
const setUser = payload => ({ type: "SIGNIN_USER_SUCCESS", payload });

// Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  } else {
  }
  try {
    const res = await axios.get("http://localhost:5000/api/auth");
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
/*export const fetchUser = userInfo => dispatch => {
  fetch(`http://localhost:5000/api/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(userInfo)
  })
    .then(res => res.json())
    .then(data => {
      // data sent back will in the format of
      // {
      //     user: {},
      //.    token: "aaaaa.bbbbb.bbbbb"
      // }

      localStorage.setItem("token", data.token);

      dispatch(setUser(data.user));
    })
    
};*/
export const fetchUser = userInfo => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify(userInfo);
  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth",
      body,
      config
    );
    dispatch({
      type: SIGNIN_USER_SUCCESS,
      payload: res.data
    });
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
      "http://localhost:5000/api/users",
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
=======
  SIGNUP_USER_SUCCESS
} from "constants/ActionTypes";

export const userSignUp = (user) => {
>>>>>>> origin/content
  return {
    type: SIGNUP_USER,
    payload: user
  };
};
<<<<<<< HEAD

export const userSignOut = () => dispatch => {
  dispatch({ type: SIGNOUT_USER });
};
export const userSignUpSuccess = authUser => {
=======
export const userSignIn = (user) => {
  return {
    type: SIGNIN_USER,
    payload: user
  };
};
export const userSignOut = () => {
  return {
    type: SIGNOUT_USER
  };
};
export const userSignUpSuccess = (authUser) => {
>>>>>>> origin/content
  return {
    type: SIGNUP_USER_SUCCESS,
    payload: authUser
  };
};

<<<<<<< HEAD
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
=======
export const userSignInSuccess = (authUser) => {
  return {
    type: SIGNIN_USER_SUCCESS,
    payload: authUser
  }
};
export const userSignOutSuccess = () => {
  return {
    type: SIGNOUT_USER_SUCCESS,
  }
};

export const showAuthMessage = (message) => {
>>>>>>> origin/content
  return {
    type: SHOW_MESSAGE,
    payload: message
  };
};

<<<<<<< HEAD
=======

>>>>>>> origin/content
export const userGoogleSignIn = () => {
  return {
    type: SIGNIN_GOOGLE_USER
  };
};
<<<<<<< HEAD
export const userGoogleSignInSuccess = authUser => {
=======
export const userGoogleSignInSuccess = (authUser) => {
>>>>>>> origin/content
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
<<<<<<< HEAD
export const userFacebookSignInSuccess = authUser => {
=======
export const userFacebookSignInSuccess = (authUser) => {
>>>>>>> origin/content
  return {
    type: SIGNIN_FACEBOOK_USER_SUCCESS,
    payload: authUser
  };
};
<<<<<<< HEAD
export const setInitUrl = url => {
=======
export const setInitUrl = (url) => {
>>>>>>> origin/content
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
<<<<<<< HEAD
export const userTwitterSignInSuccess = authUser => {
=======
export const userTwitterSignInSuccess = (authUser) => {
>>>>>>> origin/content
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
<<<<<<< HEAD
export const userGithubSignInSuccess = authUser => {
=======
export const userGithubSignInSuccess = (authUser) => {
>>>>>>> origin/content
  return {
    type: SIGNIN_GITHUB_USER_SUCCESS,
    payload: authUser
  };
};
export const showAuthLoader = () => {
  return {
<<<<<<< HEAD
    type: ON_SHOW_LOADER
=======
    type: ON_SHOW_LOADER,
>>>>>>> origin/content
  };
};

export const hideMessage = () => {
  return {
<<<<<<< HEAD
    type: HIDE_MESSAGE
=======
    type: HIDE_MESSAGE,
>>>>>>> origin/content
  };
};
export const hideAuthLoader = () => {
  return {
<<<<<<< HEAD
    type: ON_HIDE_LOADER
=======
    type: ON_HIDE_LOADER,
>>>>>>> origin/content
  };
};
