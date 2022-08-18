import React, { useState } from "react";

import "./Navbar.css";

import Brand from "./Brand/Brand";
import Searchbar from "./Searchbar/Searchbar";
import Controls from "./Controls/Controls";

const Navbar = (props) => {
  return (
    <div className="Navbar">
      <Brand {...props} />
      <Searchbar {...props} />
      <Controls />
    </div>
  );
};

export default Navbar;
