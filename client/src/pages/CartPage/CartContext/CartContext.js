import React from "react";

import styled from "styled-components";
import { connect } from "react-redux";

const CartContextWrapper = styled.div`
  width: 100%;
  background-color: grey;
  height: 650px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const CartContext = (props) => {
  // return <CartContextWrapper></CartContextWrapper>;
};

let mapStateToProps = (state) => {
  return {
    appReduxStoreState: state,
  };
};

let mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CartContext);
