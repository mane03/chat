import React, {useRef, useState} from 'react';
import useDynamicHeight from "../hooks/useDynamicHeight";
// import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";
import Emoji from "./Emoji";
const INITIAL_HEIGHT = 0


function CommentForm() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [commentValue, setCommentValue] = useState("");
    const textRef = useRef(null);
    const containerRef = useRef(null);
    const outerHeight = useRef(INITIAL_HEIGHT);
    useDynamicHeight(textRef, commentValue)


    const onExpand = () => {
        if (!isExpanded) {
            outerHeight.current = containerRef.current.scrollHeight;
            setIsExpanded(true);
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        setCommentValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(commentValue)
    }

    return (
        <>
            <form
                className="comment"
                ref={containerRef}
                style={{minHeight : isExpanded ? outerHeight.current : INITIAL_HEIGHT}}
            >
                <textarea
                    ref={textRef}
                    onClick={onExpand}
                    onFocus={onExpand}
                    onChange={handleChange}
                    value={commentValue}
                    className="comment__add"
                    name="comment"
                    id="comment">
                </textarea>
                <Emoji/>
                <button className="comment__post" onClick={handleSubmit}>Post</button>
            </form>
        </>
    );
}

export default CommentForm;