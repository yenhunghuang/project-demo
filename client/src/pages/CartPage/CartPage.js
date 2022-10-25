import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartContext from "./CartContext/CartContext.js";

const CartPageWrapper = styled.div`
  width: 40%;
  background-color: grey;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CartPage = (props) => {
  let entries = Object.entries(props.appReduxStoreState.userInfo.cart);
  return <CartPageWrapper>{entries}</CartPageWrapper>;
};

let mapStateToProps = (state) => {
  return {
    appReduxStoreState: state,
  };
};

let mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
