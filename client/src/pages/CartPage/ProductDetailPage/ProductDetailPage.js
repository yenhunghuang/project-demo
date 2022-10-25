import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { getProductById } from "../../../redux/actions";
import { useNavigate } from "react-router-dom";
import "./ProductDetailPage.css";

const ProductDetailPageWrapper = styled.div`
  width: 100%;
  background-color: grey;
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProductDetailPage = (props) => {
  let id = window.location.pathname.split("products/")[1];
  const { getProductById, appReduxStoreState } = props;

  // let URL = `http://localhost:8000/api/${id}`;

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const product = await getProductById(id);
    };
    //reset functon
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  let productGet = props.appReduxStoreState.product;

  console.log("product detail: ", productGet);

  const navigate = useNavigate();

  return (
    <ProductDetailPageWrapper>
      <>
        <div className="productscreen">
          <div className="productscreen_image">
            <img
              className="img"
              src={
                productGet[0] !== undefined ? productGet[0].image_link : null
              }
              alt={productGet[0] !== undefined ? productGet[0].name : null}
            />
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Description:
                {productGet[0] !== undefined ? productGet[0].description : null}
              </p>
              <p>
                Price: $
                <span>
                  {productGet[0] !== undefined ? productGet[0].price : null}
                </span>
              </p>
              <p>
                Status:
                <span>"In Stock" : "Out of Stock"</span>
              </p>

              <p>
                <button type="button">Add To Cart</button>
              </p>
            </div>
          </div>
        </div>
      </>
    </ProductDetailPageWrapper>
  );
};

let mapStateToProps = (state) => {
  return {
    appReduxStoreState: state,
  };
};

let mapDispatchToProps = {
  getProductById,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailPage);
