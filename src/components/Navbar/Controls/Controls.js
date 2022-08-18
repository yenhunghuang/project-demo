import React from "react";

import "./Controls.css";

import SignInStatus from "./SignInStatus/SignInStatus";
import Cart from "./Cart/Cart";

const Controls = (props) => {
  return (
    <div className="Controls">
      <SignInStatus />
      <Cart />
    </div>
  );
};

export default Controls;
