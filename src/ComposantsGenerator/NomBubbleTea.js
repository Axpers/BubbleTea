import React, { useContext } from "react";
import { NameBTContext } from "../ContextVariables/NameBTContext";

const NomBubbleTea = function () {
  const [nameBT, setNameBT] = useContext(NameBTContext);

  return (
    <div>
      <label htmlFor="nameBubbleTea">NOM</label>
      <input
        type="text"
        name="nameBubbleTea"
        id="nameBubbleTea"
        value={nameBT}
        onChange={(e) => setNameBT(e.target.value)}
      />
    </div>
  );
};

export default NomBubbleTea;
