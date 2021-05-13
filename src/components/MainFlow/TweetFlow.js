import { useState, useEffect } from "react";
import db from "../../firebase";
import Tweet from "./Tweet.js";
import ProfileTweet from "./ProfileTweet.js";
import "./TweetFlow.scss";

const TweetFlow = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    db.collection("tweets")
      .orderBy("timestamp", "desc") /* data is sorted descending by time */
      .onSnapshot((snapshot) => {
        /* we fetched updated data */
        setTweets(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <>
      <div className="tweet-flow">
        <ProfileTweet />
        <div
          style={{
            height: ".8rem",
            backgroundColor: "#192734",
            borderBottom: "1px solid rgb(56, 68, 77)",
          }}
        ></div>
        {tweets.map((tweet, key) => {
          return <Tweet tweet={tweet} key={key} />;
        })}
      </div>
    </>
  );
};

export default TweetFlow;
