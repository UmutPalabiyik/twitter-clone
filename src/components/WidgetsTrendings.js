import { FiSettings } from "react-icons/fi";
import "./WidgetsTrendings.scss";
import Trendings from "./Trendings";
import { useState } from "react";

const WidgetsTrendings = () => {
  const [limitTrendings, setLimitTrendings] = useState({
    limit: 5,
    text: "Daha fazla göster",
    situation: false,
  });

  /* it changes trending section topic limit (between 10 and 5) and text (between "Daha Fazla Göster" and "Daha Az Göster") */
  const changeLimit = () => {
    if (limitTrendings.situation) {
      setLimitTrendings({
        limit: 5,
        text: "Daha fazla göster",
        situation: false,
      });
    } else {
      setLimitTrendings({ limit: 10, text: "Daha az göster", situation: true });
    }
  };

  const trendingTopics = [
    {
      location: "Türkiye",
      hashtag: "DogeCoinTo1Dollar",
      tweetCount: 21.247,
    },
    {
      location: "Türkiye",
      hashtag: "ChineseRocket",
      tweetCount: 39.245,
    },
    {
      location: "Türkiye",
      hashtag: "Maldivler",
      tweetCount: 14.529,
    },
    {
      location: "Türkiye",
      hashtag: "elon",
      tweetCount: 6.926,
    },
    {
      location: "Türkiye",
      hashtag: "liderBeşiktaş",
      tweetCount: 28.953,
    },
    {
      location: "Türkiye",
      hashtag: "DogeCoinTo1Dollar",
      tweetCount: 21.247,
    },
    {
      location: "Türkiye",
      hashtag: "#650milyonTL",
      tweetCount: 24.245,
    },
    {
      location: "Türkiye",
      hashtag: "Eşim",
      tweetCount: 27.929,
    },
    {
      location: "Türkiye",
      hashtag: "KudüsİçinGönüllüyüm",
      tweetCount: 150.926,
    },
    {
      location: "Türkiye",
      hashtag: "Bahamalar",
      tweetCount: 12.953,
    },
  ];

  return (
    <div className="widgets-trending">
      <div className="widgets-trending__heading">
        <p className="widgets-trending__heading-text">
          İlgini çekebilecek <br />
          gündemler
        </p>
        <div className="widgets-trending__heading-settings">
          <FiSettings
            className="widgets-trending__heading-settings-icon"
            color={"#1DA1F2"}
            size={"19"}
          />
        </div>
      </div>

      {/* trend topics section */}
      {trendingTopics.slice(0, limitTrendings.limit).map((trend, key) => {
        return <Trendings trend={trend} key={key} />;
      })}

      <div className="widgets-trending__show-more" onClick={changeLimit}>
        <span className="widgets-trending__show-more-span">
          {limitTrendings.text}
        </span>
      </div>
    </div>
  );
};

export default WidgetsTrendings;
