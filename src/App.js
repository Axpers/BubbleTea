import React from "react";
import Core from "./Core";
import Generator from "./Generator";

const App = function () {
  return (
    <div id="root" className="main-container">
      <Core />
      <Generator />
    </div>
  );
};

export default App;
