import React from "react";
import styled from "styled-components";

import Form from "../Form/Form";

const SignInPageWrapper = styled.div`
  width: 100%;
  background-color: grey;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignInPage = () => {
  return (
    <SignInPageWrapper>
      <Form isForSignIn={true} />
    </SignInPageWrapper>
  );
};

export default SignInPage;
