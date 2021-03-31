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
<<<<<<< HEAD
  SIGNOUT_USER,
  SIGNUP_USER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR
} from "constants/ActionTypes";
import {
  LOGIN_FAIL,
  REGISTER_FAIL,
  REGISTER_SUCCESS
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
      return {
        ...state,
        isAuthenticated: true,
        loader: false,
        authUser: payload.user,
        initURL: "/social-apps/wall"
      };

    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loader: false,
        authUser: payload,
        initURL: "/social-apps/wall"
      };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loader: false,
        initURL: "/",
        alertMessage: payload,
        showMessage: true
      };

    case SIGNOUT_USER:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loader: false,
        initURL: "/"
      };
    case AUTH_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loader: false,
        initURL: "/"
      };
    case SIGNUP_USER_SUCCESS: {
      localStorage.setItem("token", payload.token);
      localStorage.setItem("user_id", payload.user);
      return {
        ...state,
        isAuthenticated: true,
        loader: false,
        authUser: localStorage.getItem("user_id"),
        token: localStorage.getItem("token"),
        initURL: "/social-apps/wall"
      };
    }
    case SIGNIN_USER_SUCCESS: {
      localStorage.setItem("token", payload.token);
      localStorage.setItem("user_id", payload.user);
      return {
        ...state,
        ...payload,
        loader: false,
        isAuthenticated: true,
        authUser: localStorage.getItem("user_id")
      };
=======
  SIGNUP_USER_SUCCESS
} from "constants/ActionTypes";

const INIT_STATE = {
  loader: false,
  alertMessage: '',
  showMessage: false,
  initURL: '',
  authUser: localStorage.getItem('user_id'),
};


export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SIGNUP_USER_SUCCESS: {
      return {
        ...state,
        loader: false,
        authUser: action.payload
      }
    }
    case SIGNIN_USER_SUCCESS: {
      return {
        ...state,
        loader: false,
        authUser: action.payload
      }
>>>>>>> origin/content
    }
    case INIT_URL: {
      return {
        ...state,
<<<<<<< HEAD
        initURL: payload
      };
=======
        initURL: action.payload
      }
>>>>>>> origin/content
    }
    case SIGNOUT_USER_SUCCESS: {
      return {
        ...state,
<<<<<<< HEAD
        token: localStorage.removeItem("token"),
        authUser: null,
        initURL: "/",
        loader: false,
        isAuthenticated: false
      };
=======
        authUser: null,
        initURL: '/',
        loader: false
      }
>>>>>>> origin/content
    }

    case SHOW_MESSAGE: {
      return {
        ...state,
        alertMessage: action.payload,
        showMessage: true,
        loader: false
<<<<<<< HEAD
      };
=======
      }
>>>>>>> origin/content
    }
    case HIDE_MESSAGE: {
      return {
        ...state,
<<<<<<< HEAD
        alertMessage: "",
        showMessage: false,
        loader: false
      };
=======
        alertMessage: '',
        showMessage: false,
        loader: false
      }
>>>>>>> origin/content
    }

    case SIGNIN_GOOGLE_USER_SUCCESS: {
      return {
        ...state,
        loader: false,
        authUser: action.payload
<<<<<<< HEAD
      };
=======
      }
>>>>>>> origin/content
    }
    case SIGNIN_FACEBOOK_USER_SUCCESS: {
      return {
        ...state,
        loader: false,
        authUser: action.payload
<<<<<<< HEAD
      };
=======
      }
>>>>>>> origin/content
    }
    case SIGNIN_TWITTER_USER_SUCCESS: {
      return {
        ...state,
        loader: false,
        authUser: action.payload
<<<<<<< HEAD
      };
=======
      }
>>>>>>> origin/content
    }
    case SIGNIN_GITHUB_USER_SUCCESS: {
      return {
        ...state,
        loader: false,
        authUser: action.payload
<<<<<<< HEAD
      };
=======
      }
>>>>>>> origin/content
    }
    case ON_SHOW_LOADER: {
      return {
        ...state,
        loader: true
<<<<<<< HEAD
      };
=======
      }
>>>>>>> origin/content
    }
    case ON_HIDE_LOADER: {
      return {
        ...state,
        loader: false
<<<<<<< HEAD
      };
=======
      }
>>>>>>> origin/content
    }
    default:
      return state;
  }
<<<<<<< HEAD
};
=======
}
>>>>>>> origin/content
