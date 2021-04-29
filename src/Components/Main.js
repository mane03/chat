import React, {useState} from "react";
import ConversationInfo from "./ConversationInfo";
import Messages from "./Messages";
import SentMessage from "./SentMessage";

const Main = () => {

  return(
    <div className="right__panel">
      {/*<ConversationInfo />*/}
      <Messages />
      <SentMessage />
    </div>
  )
}

export default Main