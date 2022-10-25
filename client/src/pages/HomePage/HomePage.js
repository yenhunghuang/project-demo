import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  getAllProducts,
  getProductById,
  handleSignInUser,
} from "../../redux/actions";

import { useNavigate } from "react-router-dom";
import { handleCreateProduct } from "../../redux/actions";

import ProductDisplayContainer from "./ProductDisplayContainer/ProductDisplayContainer";

const HomePageWrapper = styled.div`
  width: 100%;
  background-color: grey;
  height: 650px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const CreateProductWrapper = styled.div`
  background-color: grey;
  position: fixed;
  bottom: 5rem;
  right: 2rem;
`;

const HomePage = (props) => {
  const { getAllProducts, appReduxStoreState } = props;

  useEffect(() => {
    getAllProducts();
  }, []);

  const navigate = useNavigate();

  let data = props.getAllProducts;
  console.log("HomePage getAllData", { appReduxStoreState });

  localStorage.props = JSON.stringify(appReduxStoreState);

  let datas = JSON.parse(localStorage.getItem("props"));
  console.log(datas); // storage

  return (
    <HomePageWrapper>
      <ProductDisplayContainer data={appReduxStoreState} />
      {/* <ProductDisplayContainer data={productsStore} /> */}
      <CreateProductWrapper>
        <button onClick={() => navigate("/createProduct")}>
          Create Product
        </button>
      </CreateProductWrapper>
    </HomePageWrapper>
  );
};

let mapStateToProps = (state) => {
  return {
    appReduxStoreState: state,
  };
};

let mapDispatchToProps = {
  getAllProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
