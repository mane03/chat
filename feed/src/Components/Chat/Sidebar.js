import React from "react";
import Search from "./Search";
import Projects from "./Projects";
import Conversation from "./Conversation";
import Groups from "./Groups";
import logo from '../../assets/icons/code-republic-logo.png'
import {Link} from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className="left__panel sidebar"
      style={isOpen ? { width: 250 + "px", padding: 15 + "px" } : null}
      id="left__panel"
    >
      <Link to={'/'}>
         <img src={logo} className="header__logo chatHeader__logo" alt="logo"/>
      </Link>
      <Search />
      <Projects />
      <Conversation />
      <Groups />
    </div>
  );
};

export default Sidebar;
