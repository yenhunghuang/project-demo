import React from "react";

import { connect } from "react-redux";

import "./ForgetPasswordForm.css";

import { sentForgetPassword } from "../../../redux/actions";

const ForgetPasswordForm = (props) => {
  const { appReduxStoreState } = props;

  return (
    <div className="ForgetPasswordForm">
      <div>Forget Password</div>
      <input type="email" />
      <button
        onClick={() => {
          props.sentForgetPassword();
        }}
      >
        Submit
      </button>
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    appReduxStoreState: state,
  };
};

let mapDispatchToProps = {
  sentForgetPassword,
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPasswordForm);
