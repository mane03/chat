import React, {useState} from "react";
import ConversationInfo from "./ConversationInfo";
import Messages from "./Messages";
import SentMessage from "./SentMessage";

const Main = ( {handleOpenSidebar}) => {

  return(
    <div className="right__panel">
      <ConversationInfo handleOpenSidebar={handleOpenSidebar} />
      <Messages />
      <SentMessage />
    </div>
  )
}

export default Main
