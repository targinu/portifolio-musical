import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

import "rbx/index.css";
import { Content } from "rbx";
import Header from "./Components/Core/Header/Header";
import Body from "./Components/Body/Body";
import PageFooter from "./Components/Core/Footer/PageFooter";

function App() {
  return (
    <Content>
      <div class="bg">
        <Header></Header>
        <Body></Body>
        <PageFooter></PageFooter>
      </div>
    </Content>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
