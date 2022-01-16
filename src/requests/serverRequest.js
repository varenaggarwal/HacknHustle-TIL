import axios from "axios";

export const getDatafromServer = async () => {
  try {
    // console.log("getDatafromServer");
    const response = await axios({
      method: "GET",
      url: "http://localhost:5000/tweets/data/toptrendjan10_14.json",
    });
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getTweetCounts = async ({query}) => {
  try {
    // console.log("getDatafromServer");
    const { data } = await axios({
      method: "GET",
      url: `http://localhost:5000/tweets/count/recent/${query}`,
    });
    // console.log(response);
    const counts = []
    data && data.data && data.data.forEach(element => { 
      if(element && element.tweet_count > 0 ) counts.push(element.tweet_count)
    });
    return {data:counts};
  } catch (error) {
    console.log(error);
  }
};
