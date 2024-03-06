import React from "react";
import ReactDOM from "react-dom";

import "rbx/index.css";
import { Content } from "rbx";
import Header from "./Components/Core/Header/Header";
import Store from "./Components/Store/Store";
import Tracklist from "./Components/Tracklist/Tracklist";

function App() {
  return (
    <Content>
      <Header></Header>
      <Store></Store>
      <Tracklist></Tracklist>
    </Content>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App