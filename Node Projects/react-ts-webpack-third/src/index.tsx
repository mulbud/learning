import * as React from "react";
import * as ReactDOM from "react-dom";
import { HelloOne } from "./components/HelloOne";
import { HelloTwo } from "./components/HelloTwo";

ReactDOM.render(
  <div>
    <h1>Hello, Welcome to the first page</h1> <br />
    <HelloOne /> <br />
    <HelloTwo text="This is a passed text aaa Lorem Ipsum" />  
  </div>,
  document.getElementById("root")
);

