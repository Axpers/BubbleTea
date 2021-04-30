import React, { useContext } from "react";
import Gobelet from "./Gobelet";
import Tapioca from "./Tapioca";
import Tea from "./Tea";
import NameBTContext from "../ContextVariables/NameBTContext";
import ScaleBTContext from "../ContextVariables/ScaleBTContext";

const RenduGobelet = function () {
  const nameBT = useContext(NameBTContext);
  const scaleBT = useContext(ScaleBTContext);
  const svgStyle = {
    transform: `scale(${scaleBT[0]})`,
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
