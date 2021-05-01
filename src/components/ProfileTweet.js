import "./ProfileTweet.scss";
import { AiOutlinePicture } from "react-icons/ai";
import { AiOutlineFileGif } from "react-icons/ai";
import { AiOutlineSchedule } from "react-icons/ai";
import { BsBarChart } from "react-icons/bs";
import { FiSmile } from "react-icons/fi";

const ProfileTweet = () => {
  return (
    <div className="profile-tweet">
      <div className="profile-tweet__container">
        <div className="profile-tweet__picture">
          <img alt="img" src="../../assets/profile-pic.jpg" />
        </div>
        <div className="profile-tweet__box">
          <div className="profile-tweet__tweet">
            <input className="profile-tweet__tweet-input" type="text" placeholder="Neler Oluyor?"/>
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
                <div className="profile-tweet__mini-tweet-btn">Tweetle</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTweet;
