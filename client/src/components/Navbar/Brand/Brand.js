import React from "react";

import "./Brand.css";

const Brand = (props) => {
  const { state } = props;
  return <div className="Brand">{state.navbar.brandTitle}</div>;
};

export default Brand;
