import React, {useEffect, useState} from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import { darkTheme, lightTheme } from "../Components/Theme";
import { GlobalStyles } from "../Components/GlobalStyles";
import Header from "../Components/Header";
import Feed from "../Components/Feed";
import { ThemeProvider } from "styled-components";
import chat from "../assets/icons/messenger.svg";
import MiniChat from "../Components/MiniChat";

function BigFeed() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {}, 1000);
    return () => clearTimeout(timer);
  }, []);


  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  if (!mountedComponent) return <div />;

  return (
    <div>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Header />
        <Feed theme={theme} themeToggler={themeToggler} />
        <div>
          <button className="chat__button" onClick={handleOpen}>
            <img src={chat} alt="chat-icon" className="chat__icon" />
          </button>
            {isOpen && <MiniChat/>}
        </div>
      </ThemeProvider>
    </div>
  );
}

export default BigFeed;
