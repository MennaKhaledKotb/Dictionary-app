import React, { createContext, useState } from "react";

export const FontTypeContext = createContext();

export function FontTypeProvider({ children }) {
  const [fontType, setFontType] = useState("font-serif"); 
  return (
    <FontTypeContext.Provider value={{ fontType, setFontType }}>
      {children}
    </FontTypeContext.Provider>
  );
}

