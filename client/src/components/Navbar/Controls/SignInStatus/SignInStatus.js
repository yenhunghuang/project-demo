import React from "react";
import { connect } from "react-redux";

import { showSignInForm } from "../../../../redux/actions";

import "./SignInStatus.css";

const SignInStatus = (props) => {
  return (
    <div className="SignInStatus" onClick={() => props.showSignInForm()}>
      SignIn
    </div>
  );
};

let mapStateToProps = (state) => {
  return {};
};

let mapDispatchToProps = { showSignInForm };

export default connect(mapStateToProps, mapDispatchToProps)(SignInStatus);

// export default SignInStatus
