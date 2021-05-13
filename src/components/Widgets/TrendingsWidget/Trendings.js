import "./Trendings.scss";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const Trendings = ({ trend }) => {
  const { location, hashtag, tweetCount } = trend;

  return (
    <div className="trending">
      <div className="trending__body">
        <div className="trending__body-location">
          <p className="trending__body-location-place">
            {location} <span>konumunda gündem</span>
          </p>
          <HiOutlineDotsHorizontal className="trendin__body-location-more-icon" color={"#88A3A6"} size={"18"}/>
        </div>

        <div className="trending__body-topic">
          <span className="trending__body-topic-name"> #{hashtag} </span>
        </div>

        <div className="trending__body-tweet-count">
          <span className="trending__body-tweet-count-text">{tweetCount} tweet</span>
        </div>
      </div>
    </div>
  );
};

export default Trendings;
