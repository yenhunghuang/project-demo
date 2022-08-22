export const APP_ACTIONS = {
  resetForm: "RESET_FORM",
  onEmailChange: "FORM_ON_EMAIL_CHANGE",
  onPasswordChange: "FORM_ON_PASSWORD_CHANGE",
  handleSignInUser: "HANDLE_SIGN_IN_USER",
  handleAddProductToCart: "HANDLE_ADD_PRODUCT_TO_CART",
  handleDeleteProduct: "HANDLE_DELETE_PRODUCT",
};

export const resetForm = () => {
  return {
    type: APP_ACTIONS.resetForm,
  };
};

export const onEmailChange = (e, isForSignIn) => {
  return {
    type: APP_ACTIONS.onEmailChange,
    payload: e.target.value,
    isForSignIn,
  };
};

export const onPasswordChange = (e, isForSignIn) => {
  return {
    type: APP_ACTIONS.onPasswordChange,
    payload: e.target.value,
    isForSignIn,
  };
};

export const handleSignInUser = () => {
  return {
    type: APP_ACTIONS.handleSignInUser,
  };
};

export const handleAddProductToCart = (productName, isFirstItem) => {
  return {
    type: APP_ACTIONS.handleAddProductToCart,
    payload: productName,
    isFirstItem,
  };
};
export const handleDeleteProduct = (productName, isExistItem) => {
  return {
    type: APP_ACTIONS.handleDeleteProduct,
    payload: productName,
    isExistItem,
  };
};
