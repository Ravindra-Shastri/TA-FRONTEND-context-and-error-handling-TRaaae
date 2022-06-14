import React from "react";
import {useContext} from "react";
import { DarkModeContext } from "./DarkModeContext";


function Header() {
  let userMode = useContext(DarkModeContext);
  let isDarkMode = userMode.isDarkMode;
  return (
    <h1 className={`heading ${isDarkMode ? "heading-dark" : "heading-light"}`}>
      {isDarkMode ? "Dark Mode" : "Light Mode"}
    </h1>
  );
}

export default Header;
