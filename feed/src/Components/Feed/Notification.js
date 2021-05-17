import React from 'react';
import user from "../../assets/images/userImage.png";

function Notification() {
    return (
        <div className="notification">
            <h2 className="notification__title">Notification</h2>
            <div className="notification__item">
                <div>
                    <img src={user} className="notification__img" alt="chat" />
                </div>
                <div>
                    <p className="notification__text">Lorem ipsum dolor sit amet, consectetur consectetur consectetur <span className="notification__name">Metaqs Avagyan</span>
                    </p>
                    <span className="notification__time">Today: 22:26</span>
                </div>
            </div>
            <div className="notification__item">
                <div>
                    <img src={user} className="notification__img" alt="chat" />
                </div>
                <div>
                    <p className="notification__text">Lorem ipsum dolor sit amet, consectetur consectetur consectetur <span className="notification__name">Metaqs Avagyan</span>
                    </p>
                    <span className="notification__time">Today: 22:26</span>
                </div>
            </div>
            <div className="notification__item">
                <div>
                    <img src={user} className="notification__img" alt="chat" />
                </div>
                <div>
                    <p className="notification__text">Lorem ipsum dolor sit amet, consectetur consectetur consectetur <span className="notification__name">Metaqs Avagyan</span>
                    </p>
                    <span className="notification__time">Today: 22:26</span>
                </div>
            </div>
        </div>
    );
}

export default Notification;