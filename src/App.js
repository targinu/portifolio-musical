import React from "react";
import ReactDOM from "react-dom";

import "rbx/index.css";
import { Content } from "rbx";
import Header from "./Components/Core/Header/Header";
import Body from "./Components/Tracklist/Tracklist";
import Tracklist from "./Components/Tracklist/Tracklist";

function App() {
  return (
    <Content>
      <Header></Header>
      <Tracklist></Tracklist>
    </Content>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App