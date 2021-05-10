import React from 'react';
import userImg from '../assets/images/userImage.png'

function PostForm() {
    return (
        <form action="#"  className="post">
            <div className="post__block">
                <img src={userImg} className="post__img" alt="user-img"/>
                    <input type="text" className="post__input" placeholder="What’s on your mind today?"/>
            </div>
            <div className="post__buttons">
                <ul className="post__helpers">
                    <li className="post__items">
                        photo/video
                    </li>
                    <li className="post__items">
                        my location
                    </li>
                    <li className="post__items">
                        voice message
                    </li>
                </ul>
                <button className="post__btn">Post</button>
            </div>
        </form>
    );
}

export default PostForm;