import { useState } from "react";
import "./ProfileTweet.scss";
import { AiOutlinePicture } from "react-icons/ai";
import { AiOutlineFileGif } from "react-icons/ai";
import { AiOutlineSchedule } from "react-icons/ai";
import { BsBarChart } from "react-icons/bs";
import { FiSmile } from "react-icons/fi";

const ProfileTweet = () => {
  const [emptyInput, setEmptyInput] = useState(false);
  
  /* if input is not empty the tweet button can be clickable and the tweet button has an opacity of 1  */
  const checkInput = (e) => {
    if (e.target.value.length > 0) {
      setEmptyInput(true);
    } else {
      setEmptyInput(false);
    }
  };

  const say = () => {
    console.log("asdasd");
  };
  return (
    <div className="profile-tweet">
      <div className="profile-tweet__container">
        <div className="profile-tweet__picture">
          <img alt="img" src="../../assets/pp2.png" />
        </div>
        <div className="profile-tweet__box">
          <div className="profile-tweet__tweet">
            <input
              className="profile-tweet__tweet-input"
              onChange={checkInput}
              type="text"
              placeholder="Neler Oluyor?"
            />
          </div>
          <div className="profile-tweet__tools">
            <ul className="profile-tweet__tools-list">
              <li className="profile-tweet__tools-list-item">
                <a href="/" className="profile-tweet__list-item-link">
                  <AiOutlinePicture color={"#1da1f2"} size={23} />
                </a>
              </li>
              <li className="profile-tweet__tools-list-item">
                <a href="/" className="profile-tweet__list-item-link">
                  <AiOutlineFileGif color={"#1da1f2"} size={23} />
                </a>
              </li>
              <li className="profile-tweet__tools-list-item">
                <a href="/" className="profile-tweet__list-item-link">
                  <BsBarChart color={"#1da1f2"} size={23} />
                </a>
              </li>
              <li className="profile-tweet__tools-list-item">
                <a href="/" className="profile-tweet__list-item-link">
                  <FiSmile color={"#1da1f2"} size={23} />
                </a>
              </li>
              <li className="profile-tweet__tools-list-item">
                <a href="/" className="profile-tweet__list-item-link">
                  <AiOutlineSchedule color={"#1da1f2"} size={23} />
                </a>
              </li>
            </ul>

            <div className="profile-tweet__mini-tweet-btn-container">
              <button
                /* if true opacity is 1 else .5  */
                className={`profile-tweet__mini-tweet-btn ${
                  emptyInput ? "profile-tweet__mini-tweet-btn--opacity" : ""
                }`}
                onClick={say}
                
                disabled={emptyInput ? false : true} /* if false you can click button else you cant */
              >
                Tweetle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTweet;
