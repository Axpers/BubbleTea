import React, { useState } from "react";

const CouleurGobelet = function () {
  const [colorBT, setColorBT] = useState("red");

  return (
    <div>
      <label htmlFor="colorBubbleTea">Couleur Bordure</label>
      <input
        type="color"
        name="colorBubbleTea"
        id="colorBubbleTea"
        value={colorBT}
        onChange={(e) => setColorBT(e.target.value)}
      />
    </div>
  );
};

export default CouleurGobelet;
