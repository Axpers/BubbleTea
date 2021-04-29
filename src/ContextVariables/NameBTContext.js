import React, { createContext } from "react";

const NameBTContext = createContext(["NameBT", () => {}]);

const ColorBTContext = createContext(["#000000", () => {}]);

export { NameBTContext, ColorBTContext };
