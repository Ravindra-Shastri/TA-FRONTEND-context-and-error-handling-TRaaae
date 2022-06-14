import React from "react";
import {useContext} from "react";
import { DarkModeContext } from "./DarkModeContext";

import Banner from "./Banner";
import Cards from "./Cards";
import Paragraph from "./Paragraph";
import Title from "./Title";

function Main() {
  let userMode = useContext(DarkModeContext);
  let isDarkMode = userMode.isDarkMode.isDarkMode;
  return (
    <>
      <Title text="Text Component" isDarkMode={isDarkMode} />
      <Paragraph isDarkMode={isDarkMode} />
      <Title text="Card Component" isDarkMode={isDarkMode} />
      <Cards />
      <Title text="Banner Component" isDarkMode={isDarkMode} />
      <Banner isDarkMode={isDarkMode} />
    </>
  );
}

export default Main;
