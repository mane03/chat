import React from "react";
import user from "../../assets/images/portrait.png";

function ProfileHeader({path}) {
  const isUser = path === "/username";

  return (
    <>
      <div className="profile__header">
        <img className="profile__img" src={user} alt="user-img" />
        <div className="profile__userInfo">
          <h2 className="profile__username">{isUser ? "Metaqs Avagyan" : "Mane Kirakosyan"}</h2>
          <p className="profile__email">{isUser ? "metaqsavagyan@gmail.com" : "mane@gmail.com"}</p>
          <button className="profile__button">Team</button>
        </div>
        <div className="profile__desc">
          <ul className="profile__info">
            <li className="profile__item">
              <h3 className="info__subtitle">Posts</h3>
              <span className="info__count">15</span>
            </li>
            <li className="profile__item">
              <h3 className="info__subtitle">Followers</h3>
              <span className="info__count">35</span>
            </li>
            <li className="profile__item">
              <h3 className="info__subtitle">Following</h3>
              <span className="info__count">125</span>
            </li>
          </ul>
          <button className="profile__button">{isUser ? "Follow" : "Edit"}</button>
        </div>
      </div>
    </>
  );
}

export default ProfileHeader;
