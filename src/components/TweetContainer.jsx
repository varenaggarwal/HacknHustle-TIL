import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

const TweetContainer = ({ id }) => {
  return (
      <div className="twitter-embed">
        <TwitterTweetEmbed tweetId={id} options={{conversation: "none", cards:"hidden" }}/>
      </div>
  );
};

export default TweetContainer;
