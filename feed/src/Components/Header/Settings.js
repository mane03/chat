import React from "react";
import logout from "../../assets/icons/logout.svg";
import user from "../../assets/icons/user.svg"
import Toggle from "../Theme/Toggler";
import {Link} from "react-router-dom";

function Settings({ theme, themeToggler }) {
  return (
    <div className="notification settings">
      <h2 className="settings__title">Settings</h2>
        <div className="settings__item">
            <Toggle theme={theme} toggleTheme={themeToggler} />
            <span className="settings__desc">
          {theme === "dark" ? "Light" : "Dark"}
        </span>
        </div>
        <Link className="link" to="/user">
        <div className="settings__item">
        <span className="icon__background">
          <img src={user} alt="user-icon" />
        </span>
            <span className="settings__desc">My Profile</span>
        </div>
        </Link>
      <div className="settings__item">
        <span className="icon__background">
          <img src={logout} alt="logout-icon" />
        </span>
        <span className="settings__desc">Log Out</span>
      </div>
    </div>
  );
}

export default Settings;
