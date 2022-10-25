import axios from "axios";

export const APP_ACTIONS = {
  resetForm: "RESET_FORM",
  onEmailChange: "FORM_ON_EMAIL_CHANGE",
  onPasswordChange: "FORM_ON_PASSWORD_CHANGE",
  handleSignInUser: "HANDLE_SIGN_IN_USER",
  handleAddProductToCart: "HANDLE_ADD_PRODUCT_TO_CART",
  handleMinusProduct: "HANDLE_DELETE_PRODUCT",
  getAllProducts: "GET_ALL_PRODUCTS",
  getProductById: "GET_PRODUCT_BY_ID",
  handleCreateProduct: "HANDLE_CREATE_PRODUCT",
  deleteProduct: "DELETE_PRODUCT",
  handleEditProduct: "EDIT_PRODUCT",
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
export const handleMinusProduct = (productName, isExistItem) => {
  return {
    type: APP_ACTIONS.handleMinusProduct,
    payload: productName,
    isExistItem,
  };
};

export const getAllProducts = () => {
  let URL = "http://localhost:8000/api";

  return async (dispatch) => {
    try {
      let response = await axios.get(URL);
      let data = response.data;
      console.log("response of getAllProducts data: ", { data });
      dispatch({
        type: APP_ACTIONS.getAllProducts,
        payload: response.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const getProductById = (productId) => {
  let URL = `http://localhost:8000/api/${productId}`;

  return async (dispatch) => {
    try {
      let response = await axios.get(URL);
      let data = response.data;
      console.log("get product by ID: ", { data });
      dispatch({
        type: APP_ACTIONS.getProductById,
        payload: data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const handleCreateProduct = (props) => {
  let URL = "http://localhost:8000/api/Add";
  let product = props;
  axios.post(URL, product);

  console.log("POST ADD PRODUCT");

  return async (dispatch) => {
    try {
      let response = await axios.post(URL, product);
      let data = response.data;
      console.log("response of getAllProducts data: ", { data });
      dispatch({
        type: APP_ACTIONS.handleCreateProduct,
        payload: response.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

//EDIT MUST COMPLETE patch
export const handleEditProduct = (product) => {
  console.log("PATCH");
  let URL = `http://localhost:8000/api/${product._id}`;

  axios.patch(URL, product);

  return async (dispatch) => {
    try {
      let response = await axios.patch(URL, product);
      let data = response.data;
      console.log("response of EDFIT PRODUCT: ", { data });
      dispatch({
        type: APP_ACTIONS.handleEditProduct,
        payload: response.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const deleteProduct = (productId) => {
  let URL = `http://localhost:8000/api/${productId}`;

  axios.delete(URL);

  return async (dispatch) => {
    try {
      const response = await axios.delete(URL);
      dispatch({ type: APP_ACTIONS.deleteProduct });
    } catch (err) {
      console.log(err);
    }
  };

  // return async (dispatch) => {
  //   try {
  //     let response = await axios.delete(URL);
  //     let data = response.data;
  //     dispatch({
  //       type: APP_ACTIONS.deleteProduct,
  //       payload: data,
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
};
