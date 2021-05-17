import React, { useRef, useState } from "react";
import useDynamicHeight from "../../hooks/useDynamicHeight";
import paperClip from "../../assets/icons/paperClip.svg";
import addImage from "../../assets/icons/addPhoto.svg";
import code from "../../assets/icons/codeIcon.svg"
const INITIAL_HEIGHT = 0;

function AddHomework() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const outerHeight = useRef(INITIAL_HEIGHT);
  useDynamicHeight(textRef, commentValue);

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

  return (
    <div className="addHomework">
      <form
        className="addHomework__form"
        ref={containerRef}
        style={{ minHeight: isExpanded ? outerHeight.current : INITIAL_HEIGHT }}
      >
        <textarea
          ref={textRef}
          onClick={onExpand}
          onFocus={onExpand}
          onChange={handleChange}
          value={commentValue}
          className="addHomework__input"
          name="comment"
          id="comment"
        />
        <div className="addHomework__helpers">
          <div className="icons">
              <img src={addImage} className="addHomework__icon" alt="addPhoto" />
            <img src={code} className="addHomework__icon" alt="code" />
            <img
              src={paperClip}
              className="addHomework__icon"
              alt="paper-clip"
            />
          </div>
          <button onClick={handleSubmit} className="addHomework__btn">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddHomework;
