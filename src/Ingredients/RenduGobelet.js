import React, { useState, useContext } from "react";
import Gobelet from "./Gobelet";
import Tapioca from "./Tapioca";
import Tea from "./Tea";
import ThemeContext from "../Composants Generator/Atest";

const RenduGobelet = function () {
  const test = useContext(ThemeContext);
  return (
    <div id="rendu">
      <svg id="svg-rendu">
        <Gobelet />
        <Tea />
        <Tapioca />
      </svg>
      <h1 id="titre-rendu">{test}</h1>
    </div>
  );
};

export default RenduGobelet;
