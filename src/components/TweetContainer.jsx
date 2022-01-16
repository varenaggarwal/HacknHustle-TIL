import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

const TweetContainer = ({ id }) => {
  return (
    <div className="twitterContainer">
      {console.log("changed")}
      <div className="twitter-embed">
        <TwitterTweetEmbed tweetId={id} />
      </div>
    </div>
  );
};

export default TweetContainer;
