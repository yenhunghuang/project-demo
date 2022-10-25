import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { handleCreateProduct } from "../../redux/actions";

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

const handleCreate = () => {
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const category = document.getElementById("category").value;
  const price = document.getElementById("price").value;
  const stock_quantiyy = document.getElementById("stock_quantity").value;
  const image_link = document.getElementById("image_link").value;

  const data = {
    name,
    description,
    category,
    price,
    stock_quantiyy,
    image_link,
  };
  if (data.name && data.price && data.description && data.image_link)
    handleCreateProduct(data);
  else return;
};

export default function CreateProductPage() {
  const navigate = useNavigate();

  return (
    //     name: "",
    //   description: "",
    //   category: "",
    //   price: "",
    //   stock_quantity: "",
    //   image_link: "",
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
              handleCreate();
              navigate("/");
            }}
          >
            Create
          </StyledButton>
        </StyledForm>
      }
    </CreateProductPageWrapper>
  );
}
