import React from "react";
import Gobelet from "./Gobelet";
import Tapioca from "./Tapioca";
import Tea from "./Tea";

const RenduGobelet = function () {
  return (
    <div id="rendu">
      <svg id="svg-rendu">
        <Gobelet />
        <Tea />
        <Tapioca />
      </svg>
      <h1 id="titre-rendu">Rendu Gobelet</h1>
    </div>
  );
};

export default RenduGobelet;
