import React, { useState } from "react";
import Core from "./Core";
import Sidebar from "./Sidebar";
import ContextVariables from "./ContextVariables";

const App = function () {
  const nameBT = useState("Nom du Goblet");
  return (
    <div id="root" className="main-container">
      <ContextVariables.Provider value={nameBT}>
        <Core />
        <Sidebar />
      </ContextVariables.Provider>
    </div>
  );
};

export default App;
