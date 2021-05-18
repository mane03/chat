import React, { useRef, useState } from "react";
import useDynamicHeight from "../../hooks/useDynamicHeight";
import paperClip from "../../assets/icons/paperClip.svg";
import addImage from "../../assets/icons/addPhoto.svg";
import code from "../../assets/icons/codeIcon.svg";
import cancel from "../../assets/icons/error.svg";
const INITIAL_HEIGHT = 0;

function AddHomework() {
  const [selectedFile, setSelectedFile] = useState(null);
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

  const handleSelect = (e) => {
    setSelectedFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleCancel = () => {
    setSelectedFile(null);
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
        {selectedFile && (
          <div className="addHomework__image">
            <img
              onClick={handleCancel}
              src={cancel}
              className="img__cancel"
              alt="cancel"
            />
            <img
              className="addHomework__img"
              src={selectedFile}
              alt="selected-file"
            />
          </div>
        )}
        <div className="addHomework__helpers">
          <div className="icons">
            <>
              <label htmlFor="file_input">
                <img
                  src={addImage}
                  className="addHomework__icon"
                  alt="addPhoto"
                />
              </label>
              <input
                onChange={handleSelect}
                className="addHomework__file"
                type="file"
                id="file_input"
              />
            </>
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
