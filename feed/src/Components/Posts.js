import React, {useState} from 'react';
import PostForm from "./PostForm";
import InfiniteScroll from "react-infinite-scroll-component";
import userImg from '../assets/images/userImage.png'
import postIme from '../assets/images/postImg.png'
import disLike from '../assets/icons/like.svg'
import liked from '../assets/icons/liked.svg'
import comment from '../assets/icons/comment.svg'
import repost from '../assets/icons/repost.svg'
import sent from '../assets/icons/sent.svg'
import CommentForm from "./CommentForm";


function Posts() {
    const [items, setItems] = useState(Array.from({ length: 20 }));
    const [hasMore, setHasMore] = useState(true);
    const [like, setLike] = useState(23);
    const [update, setUpdate] = useState(false);
    const [addComment, setAddComment] = useState(false);

    const handleAddLike = () => {
        if(!update) {
            setLike(like + 1)
            setUpdate(true)
        } else {
            setLike(like-1)
            setUpdate(false)
        }
    }

    const fetchMoreData = () => {
        if (items.length >= 10) {
            setHasMore(false);
            return;
        }
        setTimeout(() => {
            setItems(items.concat(Array.from({ length: 20 })))
        }, 500);
    };

    const handleComment = () => {
        setAddComment(!addComment)
    }


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
                                <li onClick={handleAddLike} className="post__icon">
                                    {!update ? <img className="post__helpIcon" src={disLike} alt="like"/> :
                                        <img src={liked} className="post__helpIcon" alt="liked"/>}
                                    {like}
                                </li>
                                <li className="post__icon">
                                    <img onClick={handleComment} className="post__helpIcon" src={comment} alt="comment"/>
                                    67
                                </li>
                                <li className="post__icon">
                                    <img src={repost} alt="repost" className="post__helpIcon"/>
                                    18
                                </li>
                                <li className="post__icon">
                                    <img src={sent} alt="sent" className="post__helpIcon"/>
                                    32
                                </li>
                            </ul>
                            {addComment && <CommentForm/>}
                        </div>
                    </div>
                ))}
                </div>
            </InfiniteScroll>
        </>
    );
}

export default Posts;