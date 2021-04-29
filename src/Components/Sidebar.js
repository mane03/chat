import React, { useState } from "react";
import Search from "./Search";
import Projects from "./Projects";
import Conversation from "./Conversation";
import Groups from "./Groups";

const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const handleOpenSidebar = () => {
    setIsOpen(!isOpen)
  }

  return(
    <div className="left__panel sidebar" id="left__panel">
      <Search />
      <Projects />
      <Conversation  />
      <Groups />
    </div>
  )
}

export default Sidebar