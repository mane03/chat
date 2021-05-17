import React from "react";
import Activity from "./Activity";
import Presents from "./Presents";
import userImg from "../../assets/images/userImage.png";
import Toggle from "../Toggler";
import { Link } from "react-router-dom";

const Account = ({ theme, themeToggler }) => {
  return (
    <>
      <div className="account">
        <img className="account__img" src={userImg} alt="user" />
        <h2 className="account__name">
          <Link to={"/user"} className="link">
            Mane Kirakosyan
          </Link>
        </h2>
        <h3 className="account__desc">Female | 09.08.2003</h3>
        <Toggle theme={theme} toggleTheme={themeToggler} />
        <ul className="account__info">
          <li className="info__item">
            <h3 className="info__title">Posts</h3>
            <span className="info__number">15</span>
          </li>
          <li className="info__item">
            <h3 className="info__title">Followers</h3>
            <span className="info__number">20</span>
          </li>
          <li className="info__item">
            <h3 className="info__title">Following</h3>
            <span className="info__number">120</span>
          </li>
        </ul>
      </div>
      <Activity />
      <Presents />
    </>
  );
};

export default Account;
