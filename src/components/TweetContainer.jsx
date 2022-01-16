import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

const TweetContainer = ({ id }) => {
  return (
    <section className="twitterContainer">
      {console.log("changed")}
      <div className="twitter-embed">
        <TwitterTweetEmbed tweetId={id} />
      </div>
    </section>
  );
};

export default TweetContainer;
