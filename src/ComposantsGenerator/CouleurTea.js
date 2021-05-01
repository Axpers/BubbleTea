import React, { useContext } from "react";
import TeaColorContext from "../ContextVariables/TeaColorContext";

const CouleurGobelet = function () {
  const [teaColor, setTeaColor] = useContext(TeaColorContext);

  return (
    <div>
      <label htmlFor="teaColor">TEA</label>
      <input
        type="color"
        name="teaColor"
        id="teaColor"
        value={teaColor}
        onChange={(e) => setTeaColor(e.target.value)}
      />
    </div>
  );
};

export default CouleurGobelet;
