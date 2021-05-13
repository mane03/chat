import './App.scss';
import Header from "./Components/Header";
import Feed from "./Components/Feed";
import React, {useEffect, useState} from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/GlobalStyles";
import { lightTheme, darkTheme } from "./Components/Theme"
import {useDarkMode} from "./hooks/useDarkMode"
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";


function App (){
    const [theme, themeToggler, mountedComponent] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
        }, 1000);
        return () => clearTimeout(timer);
    }, []);


    const handleOpenSidebar = () => {
        setIsOpen(true)
    }

    const handleCloseSidebar = () => {
        setIsOpen(false)
    }


    if(!mountedComponent) return <div/>

    return (
        <>
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
                <Header />
                <Feed theme={theme} themeToggler={themeToggler}/>
        </ThemeProvider>
        <div className='chat'>
            <Sidebar isOpen={isOpen} />
            <Main
                handleOpenSidebar={handleOpenSidebar}
                handleCloseSidebar={handleCloseSidebar} />
        </div>
        </>
    )
}

export default App;
