import SuggestionProfile from "./SuggestionProfile";
import "./WidgetsSuggestions.scss";
import { useState } from "react";

const WidgetsSuggestions = () => {
  const [limitSuggestions, setLimitSuggestions] = useState({
    limit: 3,
    text: "Daha fazla göster",
    state: false,
  });

  const changeLimit = () => {
      if(limitSuggestions.state){
          setLimitSuggestions({limit: 3, text: "Daha az göster", state: false})
      }else{
        setLimitSuggestions({limit: 6, text: "Daha fazla göster", state: true})
      }
  }

  const recommendedProfiles = [
    {
      url: "../../assets/pic-2.png",
      displayName: "React",
      userName: "reactjs",
    },
    {
      url: "../../assets/pic-3.jpg ",
      displayName: "JavaScript Daily",
      userName: "JavaScriptDaily",
    },
    {
      url: "../../assets/pic-4.jpg",
      displayName: "TypeScript",
      userName: "typescript",
    },
    {
      url: "../../assets/pic-1.jpg",
      displayName: "SpaceBeauty",
      userName: "space",
    },
    {
      url: "../../assets/pic-5.jpg",
      displayName: "PUBG",
      userName: "PUBG",
    },
    {
      url: "../../assets/pic-6.png",
      displayName: "Dota 2",
      userName: "DOTA2",
    },
  ];
  return (
    <div className="widgets-suggestions">
      <div className="widgets-suggestions__heading">
        <span className="widgets-suggestions__heading-text">
          Kimi takip etmeli
        </span>
      </div>

      {recommendedProfiles.slice(0,limitSuggestions.limit).map((profile, key) => {
        return <SuggestionProfile profile={profile} key={key} />;
      })}

      <div className="widgets-suggestions__show-more" onClick={changeLimit}>
        <span className="widgets-suggestions__show-more-span" >
          {limitSuggestions.text}
        </span>
      </div>
    </div>
  );
};

export default WidgetsSuggestions;

/* ../../assets/pp2.png */
