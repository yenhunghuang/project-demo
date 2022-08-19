import React from "react";
import { connect } from "react-redux";

import {
  showSignUpForm,
  onSignInEmailChange,
  onSignInPasswordChange,
  onSignUpEmailChange,
  onSignUpPasswordChange,
  openForgetPasswordForm,
} from "../../../redux/actions";

import "./SignInForm.css";

const SignInForm = (props) => {
  const { appReduxStoreState } = props;

  return (
    <div className="SignInForm">
      <div>
        {appReduxStoreState.formType === "sign-in"
          ? "Sign in to your account"
          : "Sign up an account"}
      </div>

      <div className="form-input">
        Email:
        <input
          type="email"
          value={
            appReduxStoreState.formType === "sign-in"
              ? appReduxStoreState.signInForm.email
              : appReduxStoreState.signUpForm.email
          }
          onChange={(e) => {
            if (appReduxStoreState.formType === "sign-in") {
              props.onSignInEmailChange(e);
            } else {
              props.onSignUpEmailChange(e);
            }
          }}
        />
      </div>

      <div className="form-input">
        Password:
        <input
          type="password"
          value={
            appReduxStoreState.formType === "sign-in"
              ? appReduxStoreState.signInForm.password
              : appReduxStoreState.signUpForm.password
          }
          onChange={(e) => {
            if (appReduxStoreState.formType === "sign-in") {
              props.onSignInPasswordChange(e);
            } else {
              props.onSignUpPasswordChange(e);
            }
          }}
        />
      </div>

      <div>
        {
          <button>
            {appReduxStoreState.formType === "sign-in"
              ? "Sign in"
              : "Create an account"}
          </button>
        }
      </div>

      <div>
        <button
          onClick={() => {
            props.showSignUpForm();
          }}
        >
          Sign up
        </button>
      </div>
      <a
        onClick={() => {
          props.openForgetPasswordForm();
        }}
      >
        Forget Password
      </a>
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    appReduxStoreState: state,
  };
};

let mapDispatchToProps = {
  showSignUpForm,
  onSignInEmailChange,
  onSignInPasswordChange,
  onSignUpEmailChange,
  onSignUpPasswordChange,
  openForgetPasswordForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
