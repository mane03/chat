import React, { useEffect } from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import { darkTheme, lightTheme } from "../Components/Theme";
import { GlobalStyles } from "../Components/GlobalStyles";
import Header from "../Components/Header";
import Feed from "../Components/Feed";
import { ThemeProvider } from "styled-components";

function BigFeed() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    const timer = setTimeout(() => {}, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!mountedComponent) return <div />;

  return (
    <div>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Header />
        <Feed theme={theme} themeToggler={themeToggler} />
      </ThemeProvider>
    </div>
  );
}

export default BigFeed;
