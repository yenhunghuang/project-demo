import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import {
  resetForm,
  onEmailChange,
  onPasswordChange,
  handleSignInUser,
} from "../../redux/actions";

const StyledForm = styled.div`
  width: 400px;
  border: 2px solid black;
  background-color: grey;
  padding: 2rem;
`;

const StyledFormInputPair = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
`;

const StyledInputTitle = styled.div`
  font-weight: bold;
  margin: 0 2rem;
`;

const StyledInput = styled.input``;

const StyledButton = styled.button``;

const Form = (props) => {
  const { appReduxStoreState } = props;
  const { isForSignIn } = props;
  const navigate = useNavigate();

  return (
    <StyledForm>
      <h2>{isForSignIn ? "Sign In" : "Create an account"}</h2>
      <StyledFormInputPair>
        <StyledInputTitle>Email: </StyledInputTitle>
        <StyledInput
          type="email"
          value={appReduxStoreState.signInForm.email}
          onChange={(e) => props.onEmailChange(e, isForSignIn)}
        />
      </StyledFormInputPair>
      <StyledFormInputPair>
        <StyledInputTitle>Password: </StyledInputTitle>
        <StyledInput
          type="password"
          value={appReduxStoreState.signInForm.password}
          onChange={(e) => props.onPasswordChange(e, isForSignIn)}
        />
      </StyledFormInputPair>
      <StyledButton
        onClick={() => {
          if (isForSignIn) {
            props.handleSignInUser();
            navigate("/");
          }
        }}
      >
        {isForSignIn ? "Sign In" : "Create an account"}
      </StyledButton>
      {isForSignIn ? (
        <StyledFormInputPair>
          <StyledInputTitle
            onClick={() => {
              props.resetForm();
              navigate("/forget-password");
            }}
          >
            Forget Password
          </StyledInputTitle>
          <StyledInputTitle
            onClick={() => {
              props.resetForm();
              navigate("/sign-up");
            }}
          >
            Create an account
          </StyledInputTitle>
        </StyledFormInputPair>
      ) : null}
    </StyledForm>
  );
};

let mapStateToProps = (state) => {
  return {
    appReduxStoreState: state,
  };
};

let mapDispatchToProps = {
  resetForm,
  onEmailChange,
  onPasswordChange,
  handleSignInUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
