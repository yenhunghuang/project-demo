import React from "react";
import styled from "styled-components";

import Form from "../Form/Form";

const CreateAccountPageWrapper = styled.div`
  width: 100%;
  background-color: grey;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CreateAccountPage = (props) => {
  return (
    <CreateAccountPageWrapper>
      <Form isForSignIn={false} />
    </CreateAccountPageWrapper>
  );
};

export default CreateAccountPage;
