import "./ProductScreen.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Actions
// import { getProductDetails } from "../redux/actions/productActions";
// import { addToCart } from "../redux/actions/cartActions";

// const ProductScreen = ({ match, history }) => {
//   const [qty, setQty] = useState(1);
//   const dispatch = useDispatch();

// const productDetails = useSelector((state) => state.getProductDetails);
// const { loading, error, product } = productDetails;

// useEffect(() => {
//   if (product && match.params.id !== product._id) {
//     dispatch(getProductDetails(match.params.id));
//   }
// }, [dispatch, match, product]);
const ProductScreen = () => {
  return (
    <>
      <div className="productscreen">
        <div className="productscreen__left">
          <div className="left__image">
            <img
              src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80
              "
              alt="product name"
            />
          </div>

          <div className="left__info">
            <p className="left__name">Name</p>
            <p>Price: $499</p>
            <p>Description: "asdfsa"</p>
          </div>
        </div>
        <div className="productscreen__right">
          <div className="right__info">
            <p>
              Price:
              <span>$111111111</span>
            </p>
            <p>
              Status:
              <span>"In Stock"</span>
            </p>

            <p>
              <button type="button">Add To Cart</button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductScreen;
