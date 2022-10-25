import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { handleEditProduct } from "../../redux/actions";
import { getProductById } from "../../redux/actions";

const CreateProductPageWrapper = styled.div`
  width: 100%;
  background-color: grey;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.div`
  width: 400px;
  border: 2px solid black;
  background-color: grey;
  padding: 2rem;
`;

const StyledFormInputPair = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
`;

const StyledInputTitle = styled.div`
  font-weight: bold;
  margin: 0 2rem;
`;

const StyledInput = styled.input``;

const StyledButton = styled.button``;

const handleEdit = (product) => {
  product.name = document.getElementById("name").value
    ? document.getElementById("name").value
    : product.name;
  product.description = document.getElementById("description").value
    ? document.getElementById("description").value
    : product.description;
  product.category = document.getElementById("category").value
    ? document.getElementById("category").value
    : product.category;
  product.price = document.getElementById("price").value
    ? document.getElementById("price").value
    : product.price;
  product.stock_quantiyy = document.getElementById("stock_quantity").value
    ? document.getElementById("stock_quantity").value
    : product.price;
  product.image_link = document.getElementById("image_link").value
    ? document.getElementById("image_link").value
    : product.image_link;

  console.log("EDIT product : ", product);

  handleEditProduct(product);
};

const EditProductPage = (props) => {
  let id = window.location.pathname.split("editProducts/")[1];
  const { getProductById, appReduxStoreState } = props;

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

  const product = props.appReduxStoreState.product[0];
  console.log(product);

  //   let productGet = props.appReduxStoreState.product;

  const navigate = useNavigate();

  return (
    <CreateProductPageWrapper>
      {
        <StyledForm>
          <StyledFormInputPair>
            <StyledInputTitle>name: </StyledInputTitle>
            <StyledInput type="string" id="name" />
          </StyledFormInputPair>

          <StyledFormInputPair>
            <StyledInputTitle>description: </StyledInputTitle>
            <StyledInput type="string" id="description" />
          </StyledFormInputPair>

          <StyledFormInputPair>
            <StyledInputTitle>category: </StyledInputTitle>
            <StyledInput type="string" id="category" />
          </StyledFormInputPair>

          <StyledFormInputPair>
            <StyledInputTitle>price: </StyledInputTitle>
            <StyledInput type="number" id="price" />
          </StyledFormInputPair>

          <StyledFormInputPair>
            <StyledInputTitle>stock_quantity: </StyledInputTitle>
            <StyledInput type="number" id="stock_quantity" />
          </StyledFormInputPair>

          <StyledFormInputPair>
            <StyledInputTitle>image_link: </StyledInputTitle>
            <StyledInput type="string" id="image_link" />
          </StyledFormInputPair>

          <StyledButton
            onClick={() => {
              handleEdit(product);
              navigate("/");
            }}
          >
            Edit
          </StyledButton>
        </StyledForm>
      }
    </CreateProductPageWrapper>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditProductPage);
