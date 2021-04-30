import React from "react";

const SetCouleurs = function () {
  let val1 = 0;
  console.log(val1);

  const test = function () {
    val1++;
    console.log(val1);
  };

  return (
    <div>
      <label htmlFor="setCouleur">Set prédéfini</label>
      <select name="setCouleur" id="setCouleur" onChange={test}>
        <option value="">Choix de Set</option>
        <option value="">Pas de set</option>
      </select>
    </div>
  );
};

export default SetCouleurs;
