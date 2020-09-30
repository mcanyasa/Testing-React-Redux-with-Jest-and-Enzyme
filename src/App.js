import React from "react";
import Header from "./components/header/index";
import Headline from "./components/headline/index";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Headline header="Posts" desc="Click the button to render posts!" />
      </div>
    </div>
  );
}

export default App;
