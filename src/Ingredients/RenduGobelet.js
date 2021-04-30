import React, { useContext } from "react";
import Gobelet from "./Gobelet";
import Tapioca from "./Tapioca";
import Tea from "./Tea";
import NameBTContext from "../ContextVariables/NameBTContext";

const RenduGobelet = function () {
  const nameBT = useContext(NameBTContext);
  const test = "0.6";
  const svgStyle = {
    transform: `scale(${test})`,
  };

  return (
    <div id="rendu">
      <svg id="svg-rendu" style={svgStyle}>
        <Gobelet />
        <Tea />
        <Tapioca />
      </svg>
      <h1 id="titre-rendu">{nameBT}</h1>
    </div>
  );
};

export default RenduGobelet;
