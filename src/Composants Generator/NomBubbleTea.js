import React, { useState } from "react";

const NomBubbleTea = function () {
  const [nameBT, setNameBT] = useState("Test");
  return (
    <div className="conteneurLabelInput">
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
