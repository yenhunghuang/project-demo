import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getAllProducts } from "../../../../redux/actions";
// import ProductDetailPage from "../../../CartPage/ProductDetailPage/ProductDetailPage";

// import ProductScreen from "./ProductDetail/ProductScreen";

import "./index.css";

import {
  handleAddProductToCart,
  handleMinusProduct,
  deleteProduct,
} from "../../../../redux/actions";

const ProductCardWrapper = styled.div`
  height: 180px;
  width: 100px;
  margin: 1rem;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 15px;
`;

const ProductPhotoDiv = styled.div`
  width: 80px;
  height: 80px;
`;

const ProductNameDiv = styled.div`
  display: flex;

  margin: 0.2rem 0;
`;

const ProductPriceDiv = styled.div`
  display: flex;

  margin: 0.2rem 0;
`;

const CardControlsDiv = styled.div`
  display: flex;
  border: 1px solid black;
  margin: 0.2rem 0;
`;

const HowManyInCart = styled.div``;

const ProductCard = (props) => {
  const { id, name, price, appReduxStoreState, image_link } = props;

  const navigate = useNavigate();

  const handleAddProduct = (productName) => {
    let isContainedInCart = false;
    let cartProducts = Object.keys(appReduxStoreState.userInfo.cart);
    console.log("cart", cartProducts);

    for (let cartProductName of cartProducts) {
      if (cartProductName === productName) {
        isContainedInCart = true;
      }
    }

    if (isContainedInCart) {
      props.handleAddProductToCart(productName, false);
    } else {
      props.handleAddProductToCart(productName, true);
    }
  };

  const handleMinusProduct = (productName) => {
    let isContainedInCart = false;
    let cartProducts = Object.keys(appReduxStoreState.userInfo.cart);
    for (let cartProductName of cartProducts) {
      if (cartProductName === productName) {
        isContainedInCart = false;
      }
    }

    if (isContainedInCart) {
      props.handleMinusProduct(productName, true);
    } else {
      props.handleMinusProduct(productName, false);
    }
  };

  const handleProductDetail = (id) => {
    navigate(`/products/${id}`);
  };

  const handleDeleteProduct = (id) => {
    deleteProduct(id);
    setTimeout(() => {
      window.location.reload(true);
    }, 100);
  };

  const handleEditProduct = (id) => {
    console.log(id);
    navigate(`/editProducts/${id}`);
  };

  // console.log(props);

  return (
    <ProductCardWrapper>
      <ProductPhotoDiv
        onClick={() => {
          handleProductDetail(props.id);
        }}
      >
        <img className="PhotoImg" src={image_link} />
      </ProductPhotoDiv>
      <ProductNameDiv> {name}</ProductNameDiv>
      <ProductPriceDiv>${price}</ProductPriceDiv>
      <CardControlsDiv>
        <button onClick={() => handleAddProduct(name)}>ADD</button>
        <HowManyInCart>
          {appReduxStoreState.userInfo.cart[name] !== undefined &&
            appReduxStoreState.userInfo.cart[name]}
        </HowManyInCart>
        <button onClick={() => handleMinusProduct(name)}>Minus</button>
      </CardControlsDiv>
      <CardControlsDiv>
        <button
          onClick={() => {
            handleEditProduct(props.id);
          }}
        >
          EDIT
        </button>
      </CardControlsDiv>
      <CardControlsDiv>
        <button
          onClick={() => {
            handleDeleteProduct(props.id);
          }}
        >
          DELETE
        </button>
      </CardControlsDiv>
    </ProductCardWrapper>
  );
};

let mapStateToProps = (state) => {
  return {
    appReduxStoreState: state,
  };
};

let mapDispatchToProps = {
  deleteProduct,
  handleAddProductToCart,
  handleMinusProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
