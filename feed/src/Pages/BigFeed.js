import React, { useState } from "react";
import Feed from "../Components/Feed/Feed";
import chat from "../assets/icons/messenger.svg";
import MiniChat from "../Components/Chat/MiniChat";

function BigFeed(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Feed path={props.match.path} />
      <div>
        <button className="chat__button" onClick={handleOpen}>
          <img src={chat} alt="chat-icon" className="chat__icon" />
        </button>
        {isOpen && <MiniChat />}
      </div>
    </div>
  );
}

export default BigFeed;
