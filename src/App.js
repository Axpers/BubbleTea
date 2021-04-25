import React from "react";
import Core from "./Core";
import Sidebar from "./Sidebar";

const App = function () {
  return (
    <div id="root" className="main-container">
      <Core />
      <Sidebar />
    </div>
  );
};

export default App;
