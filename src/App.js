import React from "react";
import ReactDOM from "react-dom";

import "rbx/index.css";
import { Content } from "rbx";
import Header from "./Components/Core/Header/Header";
import Frame from "./Components/Frame/Frame";

function App() {
  return (
    <Content>
      <Header></Header>
    </Content>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App