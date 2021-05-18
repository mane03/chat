import "./App.scss";
import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header";
import Routs from "./Components/Routs";
import { useDarkMode } from "./hooks/useDarkMode";
import { darkTheme, lightTheme } from "./Components/Theme/Theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/Theme/GlobalStyles";

function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    const timer = setTimeout(() => {}, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!mountedComponent) return <div />;

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Router>
          <Header theme={theme} themeToggler={themeToggler} />
          <Routs />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
