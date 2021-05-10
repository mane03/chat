import './App.scss';
import Header from "./Components/Header";
import Feed from "./Components/Feed";
import React, {useEffect} from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/GlobalStyles";
import { lightTheme, darkTheme } from "./Components/Theme"
import {useDarkMode} from "./hooks/useDarkMode"


function App (){
    const [theme, themeToggler, mountedComponent] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    useEffect(() => {
        const timer = setTimeout(() => {
        }, 1000);
        return () => clearTimeout(timer);
    }, []);


    if(!mountedComponent) return <div/>

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
                <Header />
                <Feed theme={theme} themeToggler={themeToggler}/>
        </ThemeProvider>
    )
}

export default App;
