import axios from "axios";

export const getDatafromServer = async () => {
  try {
    console.log("getDatafromServer");
    const response = await axios({
      method: "GET",
      url: "http://localhost:5000/tweets/data/toptrendjan10_14.json/",
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
