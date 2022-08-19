import React from "react";

import { connect } from "react-redux";

import SignInForm from "./SignInForm/SignInForm";
import ForgetPasswordForm from "./ForgetPasswordForm/ForgetPasswordForm";
import ConfirmForgetPasswordCard from "./ConfirmForgetPasswordCard/ConfirmForgetPasswordCard";

import "./Content.css";

const Content = (props) => {
  const { appReduxStoreState } = props;

  return (
    <div className="Content">
      {appReduxStoreState.formType !== null &&
        !appReduxStoreState.isForgetPassword && <SignInForm />}
      {appReduxStoreState.isForgetPassword &&
        !appReduxStoreState.forgetPasswordForm.isSentForgetPassword && (
          <ForgetPasswordForm />
        )}
      {appReduxStoreState.forgetPasswordForm.isSentForgetPassword && (
        <ConfirmForgetPasswordCard />
      )}
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    appReduxStoreState: state,
  };
};

let mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
