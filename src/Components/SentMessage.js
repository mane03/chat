import React from "react";
// import './App.scss';


const SentMessage = () => {
  return (
      <>
        <div className="form__block">
          <form action="#" className="sent__message chat__form" id="formSent">
            <label htmlFor="sent" className="form__label ">
              <input type="text" autoComplete="off" placeholder="Write your message" id="sent"
                     className="sent__label form__input" />
                <div className="sent__icons">
                  <button className="more__icon">
                    <img className="chat__icon more__icon" src="images/icons/code.svg" alt="" />
                  </button>
                  <button className="more__icon">
                    <img className="chat__icon more__icon" src="images/icons/smile.svg" alt="" />
                  </button>
                  <button className="more__icon">
                    <img className="chat__icon more__icon" src="images/icons/paper-clip.svg" alt="" />
                  </button>
                </div>
            </label>
            <button type="submit" className="sent__btn">
              <img className="sent__icon" src="images/icons/sent.svg" alt="sentIcon" />
            </button>
          </form>
        </div>
      </>
  )
}

export default SentMessage