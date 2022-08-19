import React from "react";
import styled from "styled-components";

const ConfirmSentCardWrapper = styled.div`
  border: 2px solid black;
  background-color: blue;
  color: white;
  font-weight: bold;
  display: flex;
  width: 200px;
  height: 100px;
`;

const ConfirmSentCard = () => {
  return (
    <ConfirmSentCardWrapper>Reset Password Link Sent</ConfirmSentCardWrapper>
  );
};

export default ConfirmSentCard;
