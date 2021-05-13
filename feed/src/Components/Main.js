import React from "react";
import ConversationInfo from "./ConversationInfo";
import Messages from "./Messages";
import SentMessage from "./SentMessage";

const Main = ({ handleOpenSidebar, handleCloseSidebar }) => {
  return (
    <div className="right__panel">
      <ConversationInfo handleOpenSidebar={handleOpenSidebar} />
      <Messages handleCloseSidebar={handleCloseSidebar} />
      <SentMessage />
    </div>
  );
};

export default Main;
