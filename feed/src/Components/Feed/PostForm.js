import React, { useState } from "react";
import userImg from "../../assets/images/userImage.png";
import cancel from "../../assets/icons/error.svg";

function PostForm() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e) => {
    setSelectedFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleCancel = () => {
    setSelectedFile(null);
  };

  return (
    <form action="#" className="post">
      <div className="post__block">
        <img src={userImg} className="post__img" alt="user-img" />
        <input
          type="text"
          className="post__input"
          placeholder="What’s on your mind today?"
        />
      </div>
      {selectedFile && (
        <div className="post__selectedImg">
          <img
            onClick={handleCancel}
            src={cancel}
            className="post__cancel"
            alt="cancel"
          />
          <img
            className="post__selectedFile"
            src={selectedFile}
            alt="selected-file"
          />
        </div>
      )}
      <div className="post__buttons">
        <ul className="post__helpers">
          <li className="post__items">
            <label
              htmlFor="filePicker"
              className="post__helpBtn"
              style={{ margin: 0, cursor: "pointer" }}
            >
              Photo/Video
            </label>
            <input
              id="filePicker"
              type="file"
              style={{ visibility: "hidden", width: 0 }}
              onChange={handleChange}
            />
          </li>
          <li className="post__items">
            <button className="post__helpBtn">Book</button>
          </li>
        </ul>
        <button className="post__btn">Post</button>
      </div>
    </form>
  );
}

export default PostForm;
