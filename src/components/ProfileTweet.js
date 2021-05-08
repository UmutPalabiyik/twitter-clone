/* Hooks */
import { useState } from "react";

/* Database */
import db from "../firebase";
import firebase from "firebase";

import "./ProfileTweet.scss";

/* icons */
import { AiOutlinePicture } from "react-icons/ai";
import { AiOutlineFileGif } from "react-icons/ai";
import { AiOutlineSchedule } from "react-icons/ai";
import { BsBarChart } from "react-icons/bs";
import { FiSmile } from "react-icons/fi";

const ProfileTweet = () => {
  const [emptyInput, setEmptyInput] = useState(false);
  const [tweet, setTweet] = useState("");

  /* if input is not empty the tweet button can be clickable and the tweet button has an opacity of 1  */
  const checkInput = (e) => {
    if (e.target.value.length > 0) {
      setEmptyInput(true);
      setTweet(e.target.value);
    } else {
      setEmptyInput(false);
      setTweet("");
    }
  };

  const sendTweet = () => {
    if (emptyInput) {
      db.collection("tweets").add({
        displayName: "HeyMrHope",
        userName: "@UmmutPal",
        tweet: tweet,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

      setTweet("");
      setEmptyInput(false);
    }
  };

  const listItem = [
    {
      path: "/",
      icon: <AiOutlinePicture color={"#1da1f2"} size={23} />,
    },
    {
      path: "/",
      icon: <AiOutlineFileGif color={"#1da1f2"} size={23} />,
    },
    {
      path: "/",
      icon: <BsBarChart color={"#1da1f2"} size={23} />,
    },
    {
      path: "/",
      icon: <FiSmile color={"#1da1f2"} size={23} />,
    },
    {
      path: "/",
      icon: <AiOutlineSchedule color={"#1da1f2"} size={23} />,
    },
  ];

  return (
    <div className="profile-tweet">
      <div className="profile-tweet__container">
        <div className="profile-tweet__picture">
          <img alt="img" src="../../assets/pp2.png" />
        </div>
        <div className="profile-tweet__box">
          <div className="profile-tweet__tweet">
            <textarea
              className="profile-tweet__tweet-area"
              onChange={checkInput}
              type="text"
              placeholder="Neler Oluyor?"
              value={tweet}
            />
          </div>
          <div className="profile-tweet__tools">
            <ul className="profile-tweet__tools-list">
              {listItem.map((item, key) => {
                return (
                  <li className="profile-tweet__tools-list-item" key={key}>
                    <a
                      href={item.path}
                      className="profile-tweet__list-item-link"
                    >
                      {item.icon}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="profile-tweet__mini-tweet-btn-container">
              <button
                /* if true opacity is 1 else .5  */
                className={`profile-tweet__mini-tweet-btn ${
                  emptyInput ? "profile-tweet__mini-tweet-btn--opacity" : ""
                }`}
                disabled={
                  emptyInput ? false : true
                } /* if false you can click button else you cant */
                onClick={sendTweet}
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
