import React, { useEffect } from "react";
import logo from "../assets/images/book.svg";
import moonicon from "../assets/images/icon-moon.svg";
import Fonts from "./Fonts"
import ModeChanger from "./Mode.jsx";


function Header() {


  return (
    <>
      <header className="w-full flex justify-between items-center mb-4">
        <div>
          <img
            src={logo}
            alt="book logo"
            className="focus:outline-1 focus:outline-purple"
            tabIndex={1}
          />
        </div>
        <div className="h-full flex justify-center items-center gap-3">
          <div className="h-9 w-28 border-r-2 border-r-gray-300 pr-2 flex justify-center items-center">
            <Fonts />
          </div>
          <div
            className="focus:outline-1 focus:outline-purple"
            tabIndex={3}
          >
            <ModeChanger/>
          </div>
          <img
            src={moonicon}
            alt="moon icon"
            className="focus:outline-1 focus:outline-purple"
            tabIndex={4}
          />
        </div>
      </header>
    </>
  );
}

export default Header;
