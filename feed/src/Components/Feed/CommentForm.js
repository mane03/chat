import React, { useRef, useState } from "react";
import useDynamicHeight from "../../hooks/useDynamicHeight";
import smile from "../../assets/icons/smile.svg";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
const INITIAL_HEIGHT = 0;

function CommentForm() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const [openEmoji, setOpenEmoji] = useState(false);
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const outerHeight = useRef(INITIAL_HEIGHT);
  useDynamicHeight(textRef, commentValue);

  const handleOpenEmoji = () => {
    setOpenEmoji(!openEmoji);
  };

  const onExpand = () => {
    if (!isExpanded) {
      outerHeight.current = containerRef.current.scrollHeight;
      setIsExpanded(true);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setCommentValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(commentValue);
  };

  const addEmoji = (e) => {
    let emoji = e.native;
    setCommentValue(commentValue + emoji);
  };

  return (
    <>
      <form
        className="comment"
        ref={containerRef}
        style={{ minHeight: isExpanded ? outerHeight.current : INITIAL_HEIGHT }}
      >
        <textarea
          ref={textRef}
          onClick={onExpand}
          onFocus={onExpand}
          onChange={handleChange}
          value={commentValue}
          className="comment__add"
          name="comment"
          id="comment"
        />
        {openEmoji && (
          <Picker
            showSkinTones={false}
            showPreview={false}
            onSelect={addEmoji}
          />
        )}
        <div className="comment__buttons">
          <img src={smile} onClick={handleOpenEmoji} alt="smile" />
          <button className="comment__post" onClick={handleSubmit}>
            Post
          </button>
        </div>
      </form>
    </>
  );
}

export default CommentForm;
