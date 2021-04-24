import React from "react";
import { render } from "react-dom";
import App from "./App";

const Test = function () {
  return <App />;
};

render(<Test />, document.getElementById("root"));
