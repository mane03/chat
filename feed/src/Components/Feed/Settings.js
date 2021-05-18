import React from "react";
import logout from "../../assets/icons/logout.svg";
import Toggle from "../Toggler";

function Settings({ theme, themeToggler }) {
    console.log(theme)

  return (
    <div className="settings">
      <h2 className="settings__title">Settings</h2>
      <div className="settings__item">
        <Toggle theme={theme} toggleTheme={themeToggler} />
        <span className="settings__desc">{
            theme === "dark" ? "Light" : "Dark"
        }</span>
      </div>
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
