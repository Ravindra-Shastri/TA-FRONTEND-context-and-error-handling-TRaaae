import React from "react";
import {useContext} from "react";
import { DarkModeContext } from "./DarkModeContext";

function Title() {
  let userMode = useContext(DarkModeContext);
  let isDarkMode = userMode.isDarkMode;
  let text = userMode.text;
  return (
    <h2
      className={`heading ${
        isDarkMode ? "sub-heading-dark" : "sub-heading-light"
      }`}
    >
      {text}
    </h2>
  );
}

export default Title;
