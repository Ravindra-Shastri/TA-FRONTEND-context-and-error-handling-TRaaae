import React from "react";
import SwitchButton from "./Button";
import Header from "./Header";
import Main from "./Main";
import { DarkModeContext } from "./DarkModeContext";

class App extends React.Component {
  state = {
    isDarkMode: false,
  };


  changeMode = () => {
    this.setState((state) => {
      return { isDarkMode: !state.isDarkMode };
    });
  };
  render() {
    let { isDarkMode } = this.state;
    return (
      <div className={`bg ${isDarkMode ? "bg-dark" : "bg-light"}`}>
        <DarkModeContext.Provider value={{ isDarkMode: this.state, changeMode: this.changeMode }}>
          <Header />
          <Main />
          <SwitchButton />
        </DarkModeContext.Provider>

      </div>
    );
  }
}

export default App;
