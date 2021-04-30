import React, { useContext } from "react";
import ScaleBTContext from "../ContextVariables/ScaleBTContext";

const TailleRendu = function () {
  const [scaleBT, setScaleBT] = useContext(ScaleBTContext);

  return (
    <div>
      <label htmlFor="scaleBT">Taille</label>
      <input
        type="range"
        name="scaleBT"
        id="scaleBT"
        min="0.1"
        max="1"
        value={scaleBT}
        step="0.05"
        onChange={(e) => setScaleBT(e.target.value)}
      />
    </div>
  );
};

export default TailleRendu;
