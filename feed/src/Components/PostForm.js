import React, { useState } from "react";
import userImg from "../assets/images/userImage.png";

function PostForm() {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const handleChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setIsFilePicked(true);
    console.log(selectedFile);
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
      <div className="post__buttons">
        <ul className="post__helpers">
          <li className="post__items">
            <label htmlFor="filePicker" style={{ margin: 0 }}>
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
            <button className="post__helpBtn">my location</button>
          </li>
          <li className="post__items">
            <button className="post__helpBtn">book</button>
          </li>
        </ul>
        <button className="post__btn">Post</button>
      </div>
    </form>
  );
}

export default PostForm;
