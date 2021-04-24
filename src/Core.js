import React from "react";
import Ingredients from "./Ingredients/Ingredients";
import RenduGobelet from "./Ingredients/RenduGobelet";

const Core = function () {
  return (
    <div id="core">
      <RenduGobelet />
      <Ingredients />
    </div>
  );
};

export default Core;
