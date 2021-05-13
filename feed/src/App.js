import './App.scss';
import Header from "./Components/Header";
import Feed from "./Components/Feed";
import React, {useEffect, useState} from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/GlobalStyles";
import { lightTheme, darkTheme } from "./Components/Theme"
import {useDarkMode} from "./hooks/useDarkMode"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Chat from "./Chat";

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
        <>
        <Router>
            <Switch>
            <Route path={'/'} exact>
                <ThemeProvider theme={themeMode}>
                <GlobalStyles />
                <Header />
                <Feed theme={theme} themeToggler={themeToggler}/>
                </ThemeProvider>
            </Route>
            <Route path={'/chat'} exact>
                <Chat/>
            </Route>
            </Switch>
        </Router>

        </>
    )
}

export default App;
