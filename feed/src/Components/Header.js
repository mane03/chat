import React from "react";
import { Container } from "reactstrap";
import chat from "../assets/icons/messenger.svg";
import lessons from "../assets/icons/lessons.svg";
import logo from "../assets/icons/code-republic-logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Container className="header__container" fluid>
      <div className="header">
        <Link to={"/"}>
          <img src={logo} className="header__logo" alt="logo" />
        </Link>
        <div className="header__buttons">
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
        </div>
      </div>
    </Container>
  );
}

export default Header;
