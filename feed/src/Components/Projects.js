import React from "react";
import plus from '../assets/icons/plus.svg'

const Projects = () => {

  return (
      <>
        <div className="project">
          <div className="project__desc">
            <h2 className="project__title">Projects</h2>
            <img src={plus} className="chat__icon" alt="iconPlus" />
          </div>
          <div className="project__block">
            <div className="project__logo">
              {/*<img className="logo__img" src="" alt="icon" />*/}
            </div>
            <div className="project__logo">
              {/*<img className="logo__img" src="" alt="icon" />*/}
            </div>
            <div className="project__logo">
              {/*<img className="logo__img" src="" alt="icon" />*/}
            </div>
            <div className="project__logo">
              {/*<img className="logo__img" src="" alt="icon" />*/}
            </div>
            <div className="project__logo">
              {/*<img className="logo__img" src="" alt="icon" />*/}
            </div>
          </div>
        </div>
      </>
  )
}

export default Projects