/* icons */
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { BsDot } from "react-icons/bs";
import { CommentIcon, RetweetIcon, LikeIcon, ShareIcon } from "../../icons/TweetBoxIcons"

import "./Tweet.scss";

const Tweet = (props) => {
  const { tweet, userName, displayName, timestamp } = props.tweet;
  console.log(timestamp)

  return (
    <div className="tweet">
      <div className="tweet__wrapper">
        <div className="tweet__img">
          <img
            className="tweet__img-content"
            src="../../assets/pp2.png"
            alt=""
            style={{ height: "46px", width: "46px", borderRadius: "4rem" }}
          />
        </div>
        <div className="tweet__profile">
          <div className="tweet__owner-info">
            <div className="tweet__owner-name-content">
              <span className="tweet__display-name" style={{ color: "white" }}>
                {displayName}
              </span>
              <span className="tweet__user-name">{userName}</span>
              <BsDot color={"#88A3A6"} style={{marginTop: "2px"}}/>
            </div>

            <div className="tweet__three-dots">
              <HiOutlineDotsHorizontal color={"#88A3A6"} size={22} />
            </div>
          </div>

          <div className="tweet__tweet">
            <span className="tweet__tweet-content">{tweet}</span>
          </div>

          <div className="tweet__icons">
            <ul className="tweet__icons-list">
              <li className="tweet__icons-list-item">
                <CommentIcon />
              </li>
              <li className="tweet__icons-list-item">
                <RetweetIcon/>
              </li>
              <li className="tweet__icons-list-item">
                <LikeIcon/>
              </li>
              <li className="tweet__icons-list-item">
                <ShareIcon/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
