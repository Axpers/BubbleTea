import React from "react";
import { render } from "react-dom";

const Test = function () {
  return (
    <div id="root">
      <h3>Hello!</h3>
      Rendered!
    </div>
  );
};

render(<Test />, document.getElementById("root"));
