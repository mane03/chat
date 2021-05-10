import React, {useState} from 'react';
import PostForm from "./PostForm";
import InfiniteScroll from "react-infinite-scroll-component";
import userImg from '../assets/images/userImage.png'
import postIme from '../assets/images/postImg.png'

function Posts() {
    const [items, setItems] = useState(Array.from({ length: 20 }));
    const [hasMore, setHasMore] = useState(true);

    const fetchMoreData = () => {
        if (items.length >= 200) {
            setHasMore(false);
            return;
        }
        setTimeout(() => {
            setItems(items.concat(Array.from({ length: 20 })))
        }, 500);
    };


    return (
        <>
            <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                        <b>You have seen it all</b>
                    </p>
                }>
            <PostForm />
                <div className="posts">
                {items.map((i, index) => (
                    <div className="posts__item"  key={index}>
                        <div className="posts__user">
                            <img src={userImg} className="post__img" alt="user"/>
                        </div>
                        <div className="post__info">
                            <h3 className="post__name">Metaqs Avagyan</h3>
                            <span className="post__time">Today 9:25 Pm</span>
                            <p className="post__desc">Two things are infinite:
                                the universe and human stupidity, and I'm not
                                sure about the universe.
                            </p>
                            <img src={postIme} className="post__image" alt="post"/>
                            <ul className="post__icons">
                                <li className="post__icon">22</li>
                                <li className="post__icon">67</li>
                                <li className="post__icon">18</li>
                                <li className="post__icon">32</li>
                            </ul>
                        </div>
                    </div>
                ))}
                </div>
            </InfiniteScroll>
        </>
    );
}

export default Posts;