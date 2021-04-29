import React, { useState } from "react";
import Core from "./Core";
import Sidebar from "./Sidebar";
import NameBTContext from "./ContextVariables/NameBTContext";
import BorderColorBTContext from "./ContextVariables/BorderColorBTContext";
import TeaColorContext from "./ContextVariables/TeaColorContext";
import TapiocaColorContext from "./ContextVariables/TapiocaColorContext";

const App = function () {
  const nameBT = useState("Nom BubbleTea");
  const borderColorBT = useState("#FE8261");
  const teaColor = useState("#FFB29E");
  const tapiocaColor = useState("#404162");

  return (
    <div id="root" className="main-container">
      <NameBTContext.Provider value={nameBT}>
        <BorderColorBTContext.Provider value={borderColorBT}>
          <TeaColorContext.Provider value={teaColor}>
            <TapiocaColorContext.Provider value={tapiocaColor}>
              <Core />
              <Sidebar />
            </TapiocaColorContext.Provider>
          </TeaColorContext.Provider>
        </BorderColorBTContext.Provider>
      </NameBTContext.Provider>
    </div>
  );
};

export default App;
