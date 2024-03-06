import React from "react";
import ReactDOM from "react-dom";
import "./App.css"

import "rbx/index.css";
import { Content } from "rbx";
import Header from "./Components/Core/Header/Header";
import Store from "./Components/Store/Store";
import Tracklist from "./Components/Tracklist/Tracklist";

function App() {
  return (
    <Content>
      <div class="bg">
        <Header></Header>
        <Store></Store>
        <Tracklist></Tracklist>
      </div>
    </Content>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
