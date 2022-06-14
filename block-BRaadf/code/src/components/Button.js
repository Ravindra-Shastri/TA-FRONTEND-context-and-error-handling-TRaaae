import React from "react";
import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";

export default function SwitchButton() {
  let userMode = useContext(DarkModeContext);
  let isDarkMode = userMode.isDarkMode.isDarkMode;
  let changeMode = userMode.changeMode;

  return (
    <button
      className={`btn ${isDarkMode ? "btn-dark" : "btn-light"}`}
      onClick={changeMode}
    >
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}
