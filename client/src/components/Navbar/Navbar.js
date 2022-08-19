import styled from "styled-components";
import React from "react";

import NavbarTitle from "./NavbarTitle";
import NavSearchbar from "./NavSearchbar";
import NavSignInOrOut from "./NavSignInOrOut";
import NavCart from "./NavCart";

const NavbarWrapper = styled.div`
  width: 100%;
  height: 5rem;
  background-color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarTitle />
      <NavSearchbar />
      <NavSignInOrOut />
      <NavCart />
    </NavbarWrapper>
  );
};

export default Navbar;
