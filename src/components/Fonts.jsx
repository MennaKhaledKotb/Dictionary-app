import React, { useState, useContext } from "react";
import dropdown from "../assets/images/icon-arrow-down.svg";
import { FontTypeContext } from "./FontType.jsx";

function Fonts() {
  const { fontType, setFontType } = useContext(FontTypeContext);
  const [visible, setVisible] = useState(false);
  const [currentFont, setCurrentFont] = useState(fontType || "serif");

  const handleChangeFont = (e) => {
    const newFont = e.target.id.replace("font-", ""); 
    setFontType(newFont); 
    setCurrentFont(e.target.innerText); 
    setVisible(false);  
  };
  

  return (
    <section className="relative flex items-center gap-2">
      <p className="cursor-pointer" onClick={() => setVisible(!visible)}>
        {currentFont}
      </p>
      <img
        src={dropdown}
        className="cursor-pointer"
        alt="dropdown "
        onClick={() => setVisible(!visible)}
      />

      {visible && (
        <div className="absolute border border-black z-50 rounded-md bg-white transition-transform duration-500 translate-y-0">
          <ul className="capitalize min-w-max px-2 py-4 dark:text-black dark:border-white">
            <li
              id="font-serif"
              className="cursor-pointer"
              onClick={handleChangeFont}
            >
              Serif
            </li>
            <li
              id="font-sans"
              className="cursor-pointer"
              onClick={handleChangeFont}
            >
              Sans Serif
            </li>
            <li
              id="font-mono"
              className="cursor-pointer"
              onClick={handleChangeFont}
            >
              Monospace
            </li>
          </ul>
        </div>
      )}
    </section>
  );
}

export default Fonts;
