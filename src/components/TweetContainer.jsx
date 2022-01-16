import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

const TweetContainer = ({ id }) => {
  return (
      <div className="twitter-embed">
        <TwitterTweetEmbed tweetId={id} />
      </div>
  );
};

export default TweetContainer;
