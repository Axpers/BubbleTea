import React from "react";
import Gobelet from "./Gobelet";
import Tapioca from "./Tapioca";
import Tea from "./Tea";

const RenduGobelet = function () {
  return (
    <svg id="rendu">
      <Gobelet />
      <Tea />
      <Tapioca />
    </svg>
  );
};

export default RenduGobelet;
