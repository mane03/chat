import React from "react";
import ConversationInfo from "./ConversationInfo";


const Messages = () => {
  return (
      <>
        <ConversationInfo/>
        <div className="messages">
          <ul className="messages__block" id="messagesBlock">
            <li className="messages__sent">
              <div className="avatar__block">
                <img className="message__img" src="images/user.jpg" alt="avatar" />
              </div>
              <div className="message__desc">
                <p className="message">Lorem ipsum cere laboriosam quo veritatis? Cumque, earum, eligendi error facere ,
                  consecrated</p>
                <span className="message__time">12:25</span>
              </div>
            </li>
            <li className="messages__sent reverse">
              <div className="avatar__block">
                <img className="message__img" src="images/user.jpg" alt="avatar" />
              </div>
              <div className="message__desc">
                <p className="message">Lorem ipsum dolor sit amet, lorem consecrated</p>
                <span className="message__time">15:25</span>
              </div>
            </li>
            <li className="messages__sent">
              <div className="avatar__block">
                <img className="message__img" src="images/user.jpg" alt="avatar" />
              </div>
              <div className="message__desc">
                <p className="message">Lorem ipsum dolor sit amet, consecrated</p>
                <span className="message__time">15:26</span>
              </div>
            </li>
            <li className="messages__sent reverse">
              <div className="avatar__block">
                <img className="message__img" src="images/user.jpg" alt="avatar" />
              </div>
              <div className="message__desc">
                <p className="message">Lorem ipsum dolor sit amet, consectetur adipisicing
                  error est eum, explicabo odio qui quidemelit. Alias aliquid aperiam
                  deserunt eaque enim
                </p>
                <span className="message__time">15:30</span>
              </div>
            </li>
            <li className="messages__sent">
              <div className="avatar__block">
                <img className="message__img" src="images/user.jpg" alt="avatar" />
              </div>
              <div className="message__desc">
                <p className="message">Lorem ipsum dolor sit amet, consectetur adipisicing error est eum</p>
                <span className="message__time">15:30</span>
              </div>
            </li>
          </ul>
        </div>
      </>
  )
}

export default Messages