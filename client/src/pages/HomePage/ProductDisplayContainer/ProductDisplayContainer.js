import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard/ProductCard";

const ProductDisplayContainerWrapper = styled.div`
  border: 2px solid black;
  border-radius: 10px 10px;
  background-color: white;
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
`;

const ProductDisplayContainer = (props) => {
  const { data } = props;

  let displayProducts = data.map((product) => {
    return <ProductCard name={product.name} price={product.price} />;
  });

  return (
    <ProductDisplayContainerWrapper>
      {displayProducts}
    </ProductDisplayContainerWrapper>
  );
};

export default ProductDisplayContainer;
