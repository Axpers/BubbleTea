import React, { useContext } from "react";
import Gobelet from "./Gobelet";
import Tapioca from "./Tapioca";
import Tea from "./Tea";
import NameBTContext from "../ContextVariables/NameBTContext";
import ScaleBTContext from "../ContextVariables/ScaleBTContext";
import FontRenduContext from "../ContextVariables/FontRenduContext";

const RenduGobelet = function () {
  const nameBT = useContext(NameBTContext);
  const scaleBT = useContext(ScaleBTContext);
  const fontRendu = useContext(FontRenduContext);

  const svgStyle = {
    transform: `scale(${scaleBT[0]})`,
  };

  const h1Style = {
    fontFamily: fontRendu[0],
  };

  return (
    <div id="rendu">
      <h1 id="titre-rendu" style={h1Style}>
        {nameBT}
      </h1>
      <svg id="svg-rendu" style={svgStyle}>
        <Gobelet />
        <Tea />
        <Tapioca />
      </svg>
    </div>
  );
};

export default RenduGobelet;
