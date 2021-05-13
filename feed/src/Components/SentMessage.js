import React from "react";
import code from "../assets/icons/code.svg";
import smile from "../assets/icons/smile.svg";
import paperClip from "../assets/icons/paper-clip.svg";
import sent from "../assets/icons/sentMessage.svg";

const SentMessage = () => {
  return (
    <>
      <div className="form__block">
        <form action="#" className="sent__message chat__form" id="formSent">
          <label htmlFor="sent" className="form__label ">
            <input
              type="text"
              autoComplete="off"
              placeholder="Write your message"
              id="sent"
              className="sent__label form__input"
            />
            <div className="sent__icons">
              <button className="more__icon">
                <img className="chat__icon more__icon" src={code} alt="" />
              </button>
              <button className="more__icon">
                <img className="chat__icon more__icon" src={smile} alt="" />
              </button>
              <button className="more__icon">
                <img className="chat__icon more__icon" src={paperClip} alt="" />
              </button>
            </div>
          </label>
          <button type="submit" className="sent__btn">
            <img className="sent__icon" src={sent} alt="sentIcon" />
          </button>
        </form>
      </div>
    </>
  );
};

export default SentMessage;
