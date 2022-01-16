const axios = require('axios');
const token = "AAAAAAAAAAAAAAAAAAAAALIjYAEAAAAAa9acjQnOVG%2BzF1SdfpcxoTkgMrE%3Dhi9IxWGkiqWqkg2qqaW1ZlsoqBOz4ua61GqAyTsChjgnqZWNQ9";
const twitterApis = {
    topTrendsURL : "https://api.twitter.com/1.1/trends/place.json?id=23424848",
    recentSearchURL : "https://api.twitter.com/2/tweets/search/recent?query=lang%3Aen%20",
    recentCountURL : "https://api.twitter.com/2/tweets/counts/recent?query=",
}
let timeout = 0;

axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}

// Connect with twitter APIs
/**
 * Get Recent Tweets data
 * @param {string} query 
 * @returns 
 */
const getRecentTweets = ({query})=>{
    try {
      console.log(query);
      const url =  twitterApis.recentSearchURL + query;
      const response = axios.get(url);
      return response;
    } catch (error) {
      console.error(error);
    }
}

/**
 * Get tweets hourly count data
 * @param {string} query 
 * @returns 
 */
const getTweetsCount = ({query})=>{
    try {
      // console.log(query);
      const url =  twitterApis.recentCountURL + query;
      const response = axios.get(url);
      return response;
    } catch (error) {
      console.error(error);
    }
}

/**
 * Get top trends data
 * @param {string} query 
 * @returns 
 */
 const getTopTrends = ()=>{
    try {
      // console.log(query);
      const url = twitterApis.topTrendsURL;
      const response = axios.get(url);
      return response;
    } catch (error) {
      console.error(error);
    }
}

module.exports = {
    getRecentTweets : getRecentTweets,
    getTweetsCount : getTweetsCount,
    getTopTrends: getTopTrends
}