import {
  HIDE_MESSAGE,
  ON_HIDE_LOADER,
  ON_SHOW_LOADER,
  SHOW_MESSAGE,
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_ERROR,
  GET_FOLLOWERS,
  GET_FOLLOWINGS,
  CLEAR_PROFILE,
  CREATE_PROFILE_FAIL,
  UPDATE_PROFILE_FAIL,
  CREATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_SUCCESS,
  UPD_PROF,
  ADD_PROFILE_EDUCATION_FAIL,
  ADD_PROFILE_EXPERIENCE_FAIL,
  ACCOUNT_DELETED,
  GET_REPOS,
  NO_REPOS
} from "../../constants/ActionTypes";

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loader: true,
  alertMessage: "",
  showMessage: false,
  followers: [],
  followings: [],

  error: {}
};
export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_FOLLOWINGS:
      return {
        ...state,
        followings: payload
      };
    case GET_FOLLOWERS:
      return {
        ...state,
        followers: payload
      };

    case GET_PROFILE:
    case UPD_PROF:
      return {
        ...state,
        profile: payload,
        loader: false,
        initURL: "/question/question-list"
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loader: false
      };
    case PROFILE_ERROR:
      return {
        ...state,

        loader: false
      };
    case UPDATE_PROFILE_SUCCESS:
    case CREATE_PROFILE_SUCCESS:
      return {
        ...state,
        alertMessage: payload,
        showMessage: true,
        loader: false,
        initURL: "/question/question-list"
      };
    case UPDATE_PROFILE_FAIL:
    case CREATE_PROFILE_FAIL:
      return {
        ...state,
        alertMessage: payload,
        showMessage: true,
        loader: false,
        initURL: "/create-profile"
      };
    case ADD_PROFILE_EXPERIENCE_FAIL:
    case ADD_PROFILE_EDUCATION_FAIL:
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
    case HIDE_MESSAGE: {
      return {
        ...state,
        alertMessage: "",
        showMessage: false,
        loader: false
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
    case GET_REPOS:
      return {
        ...state,
        repos: payload,
        loader: false
      };
    case NO_REPOS:
      return {
        ...state,
        repos: []
      };
    default:
      return state;
  }
}
