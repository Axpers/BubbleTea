import React, { useState } from "react";

export default function CouleurGobelet() {
  const [colorBT, setColorBT] = useState("#000000");

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
}
