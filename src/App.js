import React, { useState } from "react";
import Core from "./Core";
import Sidebar from "./Sidebar";
import ThemeContext from "./Composants Generator/Atest";

const App = function () {
  const theme = useState("darkblue");
  return (
    <div id="root" className="main-container">
      <ThemeContext.Provider value={theme}>
        <Core />
        <Sidebar />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
