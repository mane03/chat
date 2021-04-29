import React from "react";

const ConversationInfo = () => {

  return(
      <>
        <div className="chat__info">
            <span  className="sidebar__icon">
                <img src="images/icons/sidebar.svg" alt="icon" />
            </span>
          <h3 className="chat__name">Group name</h3>
          <div className="helper__icons">
            <div className="icon">
              <img className="chat__icon" src="images/icons/plus-round.svg" alt="plus" />
            </div>
            <div className="icon">
              <img className="chat__icon" src="images/icons/search-black.svg" alt="search" />
            </div>
            <img className="chat__icon" src="images/icons/info.svg" alt="info" />
          </div>
        </div>
      </>
  )
}

export default ConversationInfo