import React, { useState } from "react";

import "./App.css";

import Page from "./components/Page/Page";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

function App() {
  const [state, setState] = useState({
    navbar: {
      brandTitle: "Management",
      searchStr: "",
    },
  });

  const onTextChange = (e) => {
    setState((prevState) => {
      return {
        ...prevState,
        navbar: {
          ...prevState.navbar,
          searchStr: e.target.value,
        },
      };
    });
  };

  return (
    <div className="App">
      <Page>
        <Navbar state={state} setState={setState} onTextChange={onTextChange} />
        <Content />
        <Footer />
      </Page>
    </div>
  );
}

export default App;
