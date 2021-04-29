import React from "react";
import ComposantsGenerator from "./ComposantsGenerator/ComposantsGenerator";
import TitreGenerator from "./ComposantsGenerator/TitreGenerator";

const Sidebar = function () {
  return (
    <div id="sidebar">
      <TitreGenerator />
      <ComposantsGenerator />
    </div>
  );
};

export default Sidebar;
