import React, { useState } from "react";
import Core from "./Core";
import Sidebar from "./Sidebar";
import { NameBTContext } from "./ContextVariables/NameBTContext";

const App = function () {
  const nameBT = useState("Nom du Goblet");
  return (
    <div id="root" className="main-container">
      <NameBTContext.Provider value={nameBT}>
        <Core />
        <Sidebar />
      </NameBTContext.Provider>
    </div>
  );
};

export default App;
