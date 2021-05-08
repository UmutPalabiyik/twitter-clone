/* icons */
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { BsDot } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { HiOutlineHeart } from "react-icons/hi";
import { RiUpload2Line } from "react-icons/ri";
import { FiBarChart2 } from "react-icons/fi";

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
                <FaRegComment color={"#88A3A6"}  size={19}/>
              </li>
              <li className="tweet__icons-list-item">
                <AiOutlineRetweet color={"#88A3A6"} size={19}/>
              </li>
              <li className="tweet__icons-list-item">
                <HiOutlineHeart color={"#88A3A6"} size={19}/>
              </li>
              <li className="tweet__icons-list-item">
                <RiUpload2Line color={"#88A3A6"} size={19}/>
              </li>
              <li className="tweet__icons-list-item">
                <FiBarChart2 color={"#88A3A6"} size={19}/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
