import { APP_ACTIONS } from "./actions";

const defaultState = {
  formType: null,
  signInForm: {
    email: "",
    password: "",
  },
  signUpForm: {
    email: "",
    password: "",
  },
  isForgetPassword: false,
  forgetPasswordForm: {
    isSentForgetPassword: false,
  },
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case APP_ACTIONS.showSignInForm:
      return {
        ...state,
        formType: "sign-in",
        signInForm: {
          email: "",
          password: "",
        },
        signUpForm: {
          email: "",
          password: "",
        },
      };

    case APP_ACTIONS.showSignUpForm:
      return {
        ...state,
        formType: "sign-up",
        signInForm: {
          email: "",
          password: "",
        },
        signUpForm: {
          email: "",
          password: "",
        },
      };

    case APP_ACTIONS.onSignInEmailChange:
      return {
        ...state,
        signInForm: {
          ...state.signInForm,
          email: action.payload,
        },
      };

    case APP_ACTIONS.onSignInPasswordChange:
      return {
        ...state,
        signInForm: {
          ...state.signInForm,
          password: action.payload,
        },
      };

    case APP_ACTIONS.onSignUpEmailChange:
      return {
        ...state,
        signUpForm: {
          ...state.signUpForm,
          email: action.payload,
        },
      };

    case APP_ACTIONS.onSignUPPasswordChange:
      return {
        ...state,
        signUpForm: {
          ...state.signUpForm,
          password: action.payload,
        },
      };

    case APP_ACTIONS.openForgetPasswordForm:
      return {
        ...state,
        isForgetPassword: true,
      };

    case APP_ACTIONS.sentForgetPassword:
      return {
        ...state,
        forgetPasswordForm: {
          ...state.forgetPasswordForm,
          isSentForgetPassword: true,
        },
      };

    default:
      return state;
  }
};

export default reducer;
