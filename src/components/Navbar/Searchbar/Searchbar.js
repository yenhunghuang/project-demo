import React from "react";

import "./Searchbar.css";

const Searchbar = (props) => {
  const { state, onTextChange } = props;
  return (
    <div className="Searchbar">
      <input value={state.navbar.searchStr} onChange={onTextChange} />
    </div>
  );
};

export default Searchbar;
