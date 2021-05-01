import React, { useContext } from "react";
import FontRenduContext from "../ContextVariables/FontRenduContext";

const FontRendu = function () {
  const [fontRendu, setFontRendu] = useContext(FontRenduContext);

  return (
    <div>
      <label htmlFor="fontRendu">FONT</label>
      <select
        name="fontRendu"
        id="fontRendu"
        value={fontRendu}
        onChange={(e) => setFontRendu(e.target.value)}
      >
        <option value="Raleway">Raleway</option>
        <option value="Lato">Lato</option>
        <option value="Roboto">Roboto</option>
        <option value="Bradley Hand ITC">Bradley Hand ITC</option>
      </select>
    </div>
  );
};

export default FontRendu;
