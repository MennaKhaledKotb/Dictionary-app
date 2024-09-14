
import React, { createContext, useState } from "react";

export const WordContext = createContext();

export const WordContextProvider = ({ children }) => {
  const [word, setWord] = useState([]);
  return (
    <WordContext.Provider value={{ word, setWord }}>
      {children}
    </WordContext.Provider>
  );
};
