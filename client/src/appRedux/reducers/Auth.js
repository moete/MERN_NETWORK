import {
  HIDE_MESSAGE,
  INIT_URL,
  ON_HIDE_LOADER,
  ON_SHOW_LOADER,
  SHOW_MESSAGE,
  SIGNIN_FACEBOOK_USER_SUCCESS,
  SIGNIN_GITHUB_USER_SUCCESS,
  SIGNIN_GOOGLE_USER_SUCCESS,
  SIGNIN_TWITTER_USER_SUCCESS,
  SIGNIN_USER_SUCCESS,
  SIGNOUT_USER_SUCCESS,
  FOLLOW_SUCCESS,
  FOLLOW_FAIL,
  UNFOLLOW_SUCCESS,
  UNFOLLOW_FAIL,
  SIGNOUT_USER,
  SIGNUP_USER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR
} from "constants/ActionTypes";
import {
  LOGIN_FAIL,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  ACCOUNT_DELETED
} from "../../constants/ActionTypes";

const INIT_STATE = {
  loader: false,
  alertMessage: "",
  showMessage: false,
  initURL: "",
  authUser: localStorage.getItem("user_id"),
  token: localStorage.getItem("token"),

  isAuthenticated: null
};

export default (state = INIT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      localStorage.setItem("token", payload.token);
      localStorage.setItem("email", payload.user.email);
      localStorage.setItem("password", payload.user.password);
      //  localStorage.setItem("email", payload.token);

      return {
        ...state,
        isAuthenticated: true,
        loader: false,
        authUser: payload.user,
        user: payload,
        initURL: "/social-//wall"
      };

    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loader: false,
        authUser: payload,
        user: payload,
        initURL: "/question/question-list"
      };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loader: false,
        initURL: "/",
        alertMessage: payload,
        showMessage: true,
        authUser: null,
        user: null
      };
    case ACCOUNT_DELETED:
    case SIGNOUT_USER:
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loader: false,
        initURL: "/",
        authUser: null,
        user: null
      };
    case AUTH_ERROR:
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loader: false,
        initURL: "/",
        authUser: null,
        user: null
      };
    case SIGNUP_USER_SUCCESS: {
      localStorage.setItem("email", payload.user.email);
      localStorage.setItem("password", payload.user.password);
      localStorage.setItem("token", payload.token);
      localStorage.setItem("user_id", payload.user);
      return {
        ...state,
        isAuthenticated: true,
        loader: false,
        authUser: payload.user,
        user: payload.user,
        initURL: "/question/question-list"
      };
    }
    case SIGNIN_USER_SUCCESS: {
      localStorage.setItem("email", payload.user.email);
      localStorage.setItem("password", payload.user.password);
      localStorage.setItem("token", payload.token);

      localStorage.setItem("user_id", payload.user._id);
      return {
        ...state,
        ...payload,
        loader: false,
        isAuthenticated: true,
        authUser: payload.user,
        user: payload.user,
        token: payload.token
      };
    }
    case INIT_URL: {
      return {
        ...state,
        initURL: payload
      };
    }
    case SIGNOUT_USER_SUCCESS: {
      return {
        ...state,
        token: localStorage.removeItem("token"),
        authUser: null,
        initURL: "/",
        loader: false,
        isAuthenticated: false,
        user: null
      };
    }

    case SHOW_MESSAGE: {
      return {
        ...state,
        alertMessage: action.payload,
        showMessage: true,
        loader: false
      };
    }
    case HIDE_MESSAGE: {
      return {
        ...state,
        alertMessage: "",
        showMessage: false,
        loader: false
      };
    }

    case SIGNIN_GOOGLE_USER_SUCCESS: {
      return {
        ...state,
        loader: false,
        authUser: action.payload
      };
    }
    case SIGNIN_FACEBOOK_USER_SUCCESS: {
      return {
        ...state,
        loader: false,
        authUser: action.payload
      };
    }
    case SIGNIN_TWITTER_USER_SUCCESS: {
      return {
        ...state,
        loader: false,
        authUser: action.payload
      };
    }
    case UNFOLLOW_SUCCESS:
    case FOLLOW_SUCCESS: {
      return {
        ...state,
        loader: false,
        authUser: payload,
        user: payload
      };
    }
    case SIGNIN_GITHUB_USER_SUCCESS: {
      return {
        ...state,
        loader: false,
        authUser: action.payload
      };
    }
    case ON_SHOW_LOADER: {
      return {
        ...state,
        loader: true
      };
    }
    case ON_HIDE_LOADER: {
      return {
        ...state,
        loader: false
      };
    }
    default:
      return state;
  }
};
