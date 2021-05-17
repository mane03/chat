import React from "react";
import Search from "./Search";
import Projects from "./Projects";
import Conversation from "./Conversation";
import Groups from "./Groups";
// import logo from '../../assets/icons/code-republic-logo.png'
// import {Link} from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className="left__panel sidebar"
      style={isOpen ? { width: 250 + "px", padding: 15 + "px" } : null}
      id="left__panel"
    >
      <Search />
      <Projects />
      <Conversation />
      <Groups />
    </div>
  );
};

export default Sidebar;
