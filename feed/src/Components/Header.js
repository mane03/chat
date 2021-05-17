import React, {useState} from "react";
import { Container } from "reactstrap";
import chat from "../assets/icons/messenger.svg";
import lessons from "../assets/icons/lessons.svg";
import logo from "../assets/icons/code-republic-logo.png";
import notification from "../assets/icons/notification.svg"
import setting from "../assets/icons/settings.svg"
import { Link } from "react-router-dom";
import Notification from "./Feed/Notification";

function Header() {
  const [openNotification, setOpenNotification] = useState(false);

  const handleOpen = () => {
    setOpenNotification(!openNotification)
  }

  return (
      <>
    <Container className="header__container" fluid>
      <div className="header">
        <Link to={"/"}>
          <img src={logo} className="header__logo" alt="logo" />
        </Link>
        <div className="header__buttons">
          <button onClick={handleOpen} className="header__button">
            <img src={notification} alt="notification-icon"/>
          </button>
          <Link to={"/chat"}>
            <button className="header__button">
              <img src={chat} alt="chat-icon" />
            </button>
          </Link>
          <Link to={"/homeworks"}>
            <button className="header__button">
              <img src={lessons} alt="lessons-icon" />
            </button>
          </Link>
          <button className="header__button">
            <img src={setting} alt="lessons-icon" />
          </button>
        </div>
      </div>
    </Container>
        {openNotification && <Notification/>}
      </>
  );
}

export default Header;
