import "./Main.scss";
import { WiStars } from "react-icons/wi";

import TweetFlow from "./TweetFlow";

const Main = () => {
  return (
    <div className="main">
      <div className="main__column">
        <div className="main__homepage">
          <span className="main__homepage-text">Anasayfa</span>
          <div className="main__homepage-stars">
            <WiStars size={35} color={"#1DA1F2"} />
          </div>
        </div>
        <TweetFlow />
      </div>
    </div>
  );
};

export default Main;
