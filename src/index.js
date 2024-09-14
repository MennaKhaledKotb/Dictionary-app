import React from "react";
import ReactDOM from "react-dom/client";
import { FontTypeProvider } from "./components/FontType.jsx";
import { WordContextProvider } from "./components/WordContext.jsx";
import { SearchProvider } from "./components/Search.jsx"; 
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <FontTypeProvider>
    <WordContextProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </WordContextProvider>
  </FontTypeProvider>
);
