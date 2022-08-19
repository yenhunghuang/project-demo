import { APP_ACTIONS } from "./actions";

const defaultState = {
  userInfo: {
    isSignIn: false,
    cart: {},
  },
  signInForm: {
    isForSignIn: "",
    email: "",
    password: "",
  },
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case APP_ACTIONS.resetForm:
      return {
        ...state,
        signInForm: defaultState.signInForm,
      };

    case APP_ACTIONS.onEmailChange:
      return {
        ...state,
        signInForm: {
          ...state.signInForm,
          isForSignIn: action.isForSignIn,
          email: action.payload,
        },
      };

    case APP_ACTIONS.onPasswordChange:
      return {
        ...state,
        signInForm: {
          ...state.signInForm,
          isForSignIn: action.isForSignIn,
          password: action.payload,
        },
      };

    case APP_ACTIONS.handleSignInUser:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          isSignIn: true,
        },
      };

    case APP_ACTIONS.handleAddProductToCart:
      if (action.isFirstItem) {
        return {
          ...state,
          userInfo: {
            ...state.userInfo,
            cart: {
              ...state.userInfo.cart,
              [action.payload]: 1,
            },
          },
        };
      } else {
        let originNumber = state.userInfo.cart[action.payload];
        return {
          ...state,
          userInfo: {
            ...state.userInfo,
            cart: {
              ...state.userInfo.cart,
              [action.payload]: originNumber + 1,
            },
          },
        };
      }

    default:
      return state;
  }
};

export default reducer;
