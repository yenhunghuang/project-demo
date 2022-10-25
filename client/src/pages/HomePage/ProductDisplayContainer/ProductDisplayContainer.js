import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard/ProductCard";

const ProductDisplayContainerWrapper = styled.div`
  border: 2px solid black;
  border-radius: 10px 10px;
  background-color: white;
  width: 1000px;
  height: 600px;
  display: flex;
  flex-wrap: wrap;
`;

const ProductDisplayContainer = (props) => {
  const { data } = props;

  // console.log("ProductDisplay", data.products);

  // console.log("ProductDisplay", { data });

  let displayProducts = data.products.map((product) => {
    return (
      <ProductCard
        id={product._id}
        name={product.name}
        price={product.price}
        image_link={product.image_link}
        props
      />
    );
  });

  return (
    <ProductDisplayContainerWrapper>
      {displayProducts}
    </ProductDisplayContainerWrapper>
  );
};

export default ProductDisplayContainer;
