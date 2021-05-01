import React, { useContext, useState } from "react";
import TapiocaColorContext from "../ContextVariables/TapiocaColorContext";
import TeaColorContext from "../ContextVariables/TeaColorContext";

const SetCouleurs = function () {
  let valeurSet = useState("clair");
  let couleurTapioca = useContext(TapiocaColorContext);
  let couleurTea = useContext(TeaColorContext);

  function changementCouleurs(element) {
    if (element === "clair") {
      valeurSet = element;
      couleurTapioca = "#FFFFFF";
      couleurTea = "#FFFFFF";
    } else if (element === "sombre") {
      valeurSet = element;
      couleurTapioca = "#000000";
      couleurTea = "#000000";
    }
  }

  return (
    <div>
      <label htmlFor="setCouleur">Set Couleurs</label>
      <select
        name="setCouleur"
        id="setCouleur"
        value={valeurSet}
        onChange={(element) => changementCouleurs(element.target.value)}
      >
        <option value="clair">Thème clair</option>
        <option value="sombre">Thème sombre</option>
      </select>
    </div>
  );
};

export default SetCouleurs;
