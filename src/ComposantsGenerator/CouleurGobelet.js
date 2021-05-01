import React, { useContext } from "react";
import BorderColorBTContext from "../ContextVariables/BorderColorBTContext";

const CouleurGobelet = function () {
  const [colorBorderBT, setColorBorderBT] = useContext(BorderColorBTContext);

  return (
    <div>
      <label htmlFor="colorBubbleTea">GOBELET</label>
      <input
        type="color"
        name="colorBubbleTea"
        id="colorBubbleTea"
        value={colorBorderBT}
        onChange={(e) => setColorBorderBT(e.target.value)}
      />
    </div>
  );
};

export default CouleurGobelet;
