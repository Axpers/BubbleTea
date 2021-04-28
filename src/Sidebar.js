import React from "react";
import ComposantsGenerator from "./Composants Generator/ComposantsGenerator";
import TitreGenerator from "./Composants Generator/TitreGenerator";

const Sidebar = function () {
  return (
    <div id="sidebar">
      <TitreGenerator />
      <ComposantsGenerator />
    </div>
  );
};

export default Sidebar;
