import React, { useContext } from "react";
import TapiocaColorContext from "../ContextVariables/TapiocaColorContext";

const CouleurTapioca = function () {
  const [tapiocaColor, setTapiocaColor] = useContext(TapiocaColorContext);

  return (
    <div>
      <label htmlFor="tapiocaColor">TAPIOCA</label>
      <input
        type="color"
        name="tapiocaColor"
        id="tapiocaColor"
        value={tapiocaColor}
        onChange={(e) => setTapiocaColor(e.target.value)}
      />
    </div>
  );
};

export default CouleurTapioca;
