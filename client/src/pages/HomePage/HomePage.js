import React from "react";
import styled from "styled-components";

import productsStore from "../../database/products";

import ProductDisplayContainer from "./ProductDisplayContainer/ProductDisplayContainer";

const HomePageWrapper = styled.div`
  width: 100%;
  background-color: grey;
  height: 650px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomePage = () => {
  return (
    <HomePageWrapper>
      <ProductDisplayContainer data={productsStore} />
    </HomePageWrapper>
  );
};

export default HomePage;
