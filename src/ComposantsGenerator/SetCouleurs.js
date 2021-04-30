import React from "react";

const SetCouleurs = function () {
  return (
    <div>
      <label htmlFor="setCouleur">Set prédéfini</label>
      <select name="setCouleur" id="setCouleur">
        <option value="">Choix de Set</option>
        <option value="">Y'a pas de set dsl</option>
      </select>
    </div>
  );
};

export default SetCouleurs;
