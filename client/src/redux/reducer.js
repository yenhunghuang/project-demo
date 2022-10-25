// import { combineReducers } from "redux";
import { APP_ACTIONS } from "./actions";

const defaultState = {
  userInfo: {
    isSignIn: false,
    cart: {},
    // isAdmin: false
  },
  signInForm: {
    isForSignIn: "",
    email: "",
    password: "",
  },
  products: [],
  product: [],
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

    case APP_ACTIONS.handleMinusProduct:
      let Number = state.userInfo.cart[action.payload];
      if (Number > 0) {
        return {
          ...state,
          userInfo: {
            ...state.userInfo,
            cart: {
              ...state.userInfo.cart,
              [action.payload]: Number - 1,
            },
          },
        };
      } else {
        return {
          ...state,
          userInfo: {
            ...state.userInfo,
            cart: {
              ...state.userInfo.cart,
              [action.payload]: 0,
            },
          },
        };
      }

    case APP_ACTIONS.getAllProducts:
      console.log("action.payload", action.payload);
      return {
        ...state,
        products: [...action.payload],
        product: [],
      };

    case APP_ACTIONS.getProductById:
      console.log("action.payload", action.payload);

      return {
        ...state,
        // product: [...action.payload],

        product: [action.payload],
      };

    case APP_ACTIONS.deleteProduct:
      console.log("action.payload", action.payload);

      return {
        ...state,
        product: [...action.payload],
      };

    case APP_ACTIONS.handleCreateProduct:
      console.log("action.payload", action.payload);

      return {
        ...state,
        products: [...action.payload],
        product: [],
      };
    case APP_ACTIONS.handleEditProduct:
      console.log("action.payload", action.payload);

      return {
        ...state,
        // products: [...action.payload],
        product: [action.payload],
      };

    default:
      return state;
  }
};

export default reducer;
