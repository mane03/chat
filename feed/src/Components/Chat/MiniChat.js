import React from "react";
import user from '../../assets/images/userImage.png'
import {Link} from "react-router-dom";

function MiniChat() {
  return (
      <div className="smChat">
      <h3 className="smChat__title">Messages</h3>
      <div className="smChat__block">
          <Link to={'/chat'} className="link">
          <div className="smChat__single">
              <div>
                  <img src={user} className="smChat__img" alt="chat"/>
              </div>
              <div>
                  <span className="smCHat__name">Metaqs Avagyan</span>
                  <p className="smChat__desc">Lorem ipsum dolor sit amet...</p>
              </div>
          </div>
          </Link>
          <Link to={'/chat'} className="link">
              <div className="smChat__single">
                  <div>
                      <img src={user} className="smChat__img" alt="chat"/>
                  </div>
                  <div>
                      <span className="smCHat__name">Metaqs Avagyan</span>
                      <p className="smChat__desc">Lorem ipsum dolor sit amet...</p>
                  </div>
              </div>
          </Link>
          <Link to={'/chat'} className="link">
              <div className="smChat__single">
                  <div>
                      <img src={user} className="smChat__img" alt="chat"/>
                  </div>
                  <div>
                      <span className="smCHat__name">Metaqs Avagyan</span>
                      <p className="smChat__desc">Lorem ipsum dolor sit amet...</p>
                  </div>
              </div>
          </Link>
          <Link to={'/chat'} className="link">
              <div className="smChat__single">
                  <div>
                      <img src={user} className="smChat__img" alt="chat"/>
                  </div>
                  <div>
                      <span className="smCHat__name">Metaqs Avagyan</span>
                      <p className="smChat__desc">Lorem ipsum dolor sit amet...</p>
                  </div>
              </div>
          </Link>
      </div>
      </div>
  );
}

export default MiniChat;
