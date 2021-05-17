import React from 'react';
import userImg from '../../assets/images/userImage.png'
import timer from '../../assets/icons/sand-clock.svg'
import comment from '../../assets/icons/comment.svg'


function Homeworks() {
    return (
    <>
        <div className="homeworks">
                <div className="homeworks__item">
                    <div className="homeworks__userImg">
                        <img src={userImg} className="teacher__img" alt="user"/>
                    </div>
                    <div className="homeworks__desc">
                        <span className="teacher__name">Dero Khachatryan</span>
                        <span className="homeworks__time">14:20</span>
                        <div className="homeworks__background">
                            <p className="homeworks__text">Write a function that returns the string "something" joined with a space " " and the given argument a.
                                Examples
                                GiveMeSomething("is better than nothing") ➞ "something is better than nothing"
                                GiveMeSomething("Bob Jane") ➞ "something Bob Jane"
                                GiveMeSomething("something") ➞ "something something"
                            </p>
                        <div className="homeworks__helpers">
                            <span className="homeworks__timer">
                                <img src={timer} className="timer__icon" alt="timer"/>
                                Deadline - 21:00
                            </span>
                            <img src={comment} className="homeworks__comment" alt="comment"/>
                        </div>
                        </div>
                    </div>
                </div>
        </div>
    </>
    );
}

export default Homeworks;