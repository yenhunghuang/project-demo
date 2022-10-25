import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

const NavbarTitleWrapper = styled.div`
  color: white;
`;

const NavbarTitle = (props) => {
  const navigate = useNavigate();

  return (
    <NavbarTitleWrapper onClick={() => navigate("/")}>
      Management
    </NavbarTitleWrapper>
  );
};

export default NavbarTitle;
