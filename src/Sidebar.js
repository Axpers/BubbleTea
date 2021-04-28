import React from "react";
import NomBubbleTea from "./Composants Generator/NomBubbleTea";
import CouleurGobelet from "./Composants Generator/CouleurGobelet";
import CouleurTea from "./Composants Generator/CouleurTea";
import CouleurTapioca from "./Composants Generator/CouleurTapioca";
import TailleRendu from "./Composants Generator/TailleRendu";

const Sidebar = function () {
  return (
    <div id="sidebar">
      <div id="titre-generator">
        <h1>Bubble Tea</h1>
        <h1>Generator</h1>
      </div>
      <form id="composants-generator">
        <NomBubbleTea />
        <CouleurGobelet />
        <CouleurTea />
        <CouleurTapioca />
        <TailleRendu />
      </form>
    </div>
  );
};

export default Sidebar;
