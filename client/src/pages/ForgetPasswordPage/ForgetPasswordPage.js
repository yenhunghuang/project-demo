import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import ConfirmSentCard from "./ConfirmSentCard";

import {
  resetForm,
  onEmailChange,
  onPasswordChange,
} from "../../redux/actions";

const ForgetPasswordPageWrapper = styled.div`
  width: 100%;
  background-color: grey;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.div``;

const StyledInput = styled.input``;

const ForgetPasswordPage = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  useEffect(() => {
    return () => setIsSubmitted(false);
  }, []);

  const navigate = useNavigate();

  return (
    <ForgetPasswordPageWrapper>
      {!isSubmitted ? (
        <StyledForm>
          <h1>Forget Password</h1>
          <StyledInput type="email" />
          <button
            onClick={() => {
              props.resetForm();
              setIsSubmitted(true);
            }}
          >
            Send
          </button>
        </StyledForm>
      ) : (
        <ConfirmSentCard />
      )}
    </ForgetPasswordPageWrapper>
  );
};

let mapStateToProps = (state) => {
  return {
    appReduxStoreState: state,
  };
};

let mapDispatchToProps = { resetForm, onEmailChange, onPasswordChange };

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPasswordPage);
