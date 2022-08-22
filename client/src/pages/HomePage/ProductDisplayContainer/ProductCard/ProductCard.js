import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import ProductDetail from "./ProductDetail/ProductDetail";

import {
  handleAddProductToCart,
  handleDeleteProduct,
} from "../../../../redux/actions";

const ProductCardWrapper = styled.div`
  height: 150px;
  width: 120px;
  margin: 1rem;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const ProductPhotoDiv = styled.div``;

const ProductNameDiv = styled.div``;

const ProductPriceDiv = styled.div``;

const CardControlsDiv = styled.div`
  display: flex;
  border: 2px solid black;
  margin: 1rem 0;
`;

const HowManyInCart = styled.div``;

const ProductCard = (props) => {
  const { name, price, appReduxStoreState } = props;

  const navigate = useNavigate();

  const handleAddProduct = (productName) => {
    let isContainedInCart = false;
    let cartProducts = Object.keys(appReduxStoreState.userInfo.cart);
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

  const handleDeleteProduct = (productName) => {
    let isContainedInCart = false;
    let cartProducts = Object.keys(appReduxStoreState.userInfo.cart);
    for (let cartProductName of cartProducts) {
      if (cartProductName === productName) {
        isContainedInCart = false;
      }
    }

    if (isContainedInCart) {
      props.handleDeleteProduct(productName, true);
    } else {
      props.handleDeleteProduct(productName, false);
    }
  };

  const handleProductDetail = (productName) => {
    navigate("/my-cart/product-detail");
  };

  return (
    <ProductCardWrapper>
      <ProductPhotoDiv onClick={() => handleProductDetail(name)}>
        Product Photo
      </ProductPhotoDiv>
      <ProductNameDiv>Name: {name}</ProductNameDiv>
      <ProductPriceDiv>${price}</ProductPriceDiv>
      <CardControlsDiv>
        <button onClick={() => handleAddProduct(name)}>ADD</button>
        <HowManyInCart>
          {appReduxStoreState.userInfo.cart[name] !== undefined &&
            appReduxStoreState.userInfo.cart[name]}
        </HowManyInCart>
        <button onClick={() => handleDeleteProduct(name)}>Delete</button>
      </CardControlsDiv>
      <CardControlsDiv>
        <button>EDIT</button>
      </CardControlsDiv>
    </ProductCardWrapper>
  );
};

let mapStateToProps = (state) => {
  return {
    appReduxStoreState: state,
  };
};

let mapDispatchToProps = { handleAddProductToCart, handleDeleteProduct };

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
