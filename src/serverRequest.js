import axios from "axios";

export const getDatafromServer = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: "http://localhost:5000/tweets/data/toptrendjan10_14.json/",
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
