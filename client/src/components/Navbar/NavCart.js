import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { useNavigate } from "react-router-dom";

const NavCartWrapper = styled.div`
  color: white;
  cursor: pointer;
`;

const TotalCartItemsCount = styled.div`
  background-color: red;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
  color: white;
`;

const NavCart = (props) => {
  const navigate = useNavigate();
  let totalItemsCount = 0;
  let entries = Object.entries(props.appReduxStoreState.userInfo.cart);
  for (let [key, value] of entries) {
    totalItemsCount += value;
  }

  return (
    <>
      <NavCartWrapper onClick={() => navigate("/my-cart")}>Cart</NavCartWrapper>
      <TotalCartItemsCount>{totalItemsCount}</TotalCartItemsCount>
    </>
  );
};

let mapStateToProps = (state) => {
  return {
    appReduxStoreState: state,
  };
};

let mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NavCart);
