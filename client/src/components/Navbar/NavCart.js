import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import CartPage from "../../pages/CartPage/CartPage";

import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/CloseButton";
import Offcanvas from "react-bootstrap/Offcanvas";

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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const navigate = useNavigate();
  let totalItemsCount = 0;
  let entries = Object.entries(props.appReduxStoreState.userInfo.cart);

  // console.log("NavCart: ", props);
  for (let [key, value] of entries) {
    totalItemsCount += value;
  }

  return (
    <>
      <>
        <NavCartWrapper variant="primary" onClick={handleShow}>
          Cart
        </NavCartWrapper>

        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <CartPage />
          </Offcanvas.Body>
        </Offcanvas>
      </>
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
