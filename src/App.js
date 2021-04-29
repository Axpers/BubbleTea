import React, { useState } from "react";
import Core from "./Core";
import Sidebar from "./Sidebar";
import NameBTContext from "./ContextVariables/NameBTContext";
import BorderColorBTContext from "./ContextVariables/BorderColorBTContext";

const App = function () {
  const nameBT = useState("Nom du Goblet");
  const borderColorBT = useState("#000000");
  return (
    <div id="root" className="main-container">
      <NameBTContext.Provider value={nameBT}>
        <BorderColorBTContext.Provider value={borderColorBT}>
          <Core />
          <Sidebar />
        </BorderColorBTContext.Provider>
      </NameBTContext.Provider>
    </div>
  );
};

export default App;
