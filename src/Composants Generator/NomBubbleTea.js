import React, { createContext, useState } from "react";

const NomBubbleTea = function () {
  const [nameBT, setNameBT] = useState("NomGobelet");

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
