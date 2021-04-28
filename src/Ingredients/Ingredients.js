import React from "react";
import Gobelet from "./Gobelet";
import Tea from "./Tea";
import Tapioca from "./Tapioca";

const Ingredients = function () {
  return (
    <ul id="ingredients">
      <li id="tea">
        <Tea />
      </li>
      <li id="gobelet">
        <Gobelet />
      </li>
      <li id="tapioca">
        <Tapioca />
      </li>
    </ul>
  );
};

export default Ingredients;
