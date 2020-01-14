import * as actions from "./constants";

const initialState = {
  user: { accessToken: "80c7b6c147410e898f084f554ce021bb0da00e65" },
  errors: { SignIn: null, SignUp: null }
};

export const EmailAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.EMAIL_AUTH_LOGIN_SUCCESS:
      return { ...state, user: action.user };
    case actions.EMAIL_AUTH_LOGIN_ERROR:
      return { ...state, errors: { SignIn: action.error } };
    case actions.EMAIL_AUTH_SIGNUP_SUCCESS:
      return { ...state, user: action.user };
    case actions.EMAIL_AUTH_SIGNUP_ERROR:
      return { ...state, errors: { SignUp: action.error } };
    case actions.EMAIL_AUTH_LOGOUT:
      return initialState;
    default:
      return state;
  }
};
