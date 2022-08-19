import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import styled from "styled-components";

const NavSignInOrOutWrapper = styled.div`
  color: white;
  cursor: pointer;
`;

const NavSignInOrOut = (props) => {
  const { appReduxStoreState } = props;
  const navigate = useNavigate();

  return (
    <NavSignInOrOutWrapper onClick={() => navigate("/sign-in")}>
      {!appReduxStoreState.userInfo.isSignIn ? "Sign In" : " Sign Out"}
    </NavSignInOrOutWrapper>
  );
};

let mapStateToProps = (state) => {
  return {
    appReduxStoreState: state,
  };
};

let mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NavSignInOrOut);
