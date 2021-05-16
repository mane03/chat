import React from "react";
import sidebar from "../../assets/icons/sidebar.svg";
import plusRound from "../../assets/icons/plus-round.svg";
import searchBlack from "../../assets/icons/search-black.svg";
import info from "../../assets/icons/info.svg";

const ConversationInfo = ({ handleOpenSidebar }) => {
  return (
    <>
      <div className="chat__info">
        <span className="sidebar__icon" onClick={handleOpenSidebar}>
          <img src={sidebar} alt="icon" />
        </span>
        <h3 className="chat__name">Group name</h3>
        <div className="helper__icons">
          <div className="icon">
            <img className="chat__icon" src={plusRound} alt="plus" />
          </div>
          <div className="icon">
            <img className="chat__icon" src={searchBlack} alt="search" />
          </div>
          <img className="chat__icon" src={info} alt="info" />
        </div>
      </div>
    </>
  );
};

export default ConversationInfo;
