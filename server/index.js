const app = require("express")();
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const cors = require('cors');
const {
  getRecentTweets,
  getTweetsCount,
  getTopTrends,
} = require("./lib/tweetsController");
const {
  concatTweets2Text,
  processAndGather,
  saveFile,
} = require("./lib/service");
const { findCategory } = require("./lib/openApiController");
const DIR_DATASET_PATH = "../dataset/";

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Dynamic API */
app.get("/tweets/search/recent/:query", async (req, res) => {
  // Get the query from the url as specified in the get function
  const query = encodeURIComponent(req.params.query);
  const { data: tweetData } = await getRecentTweets({ query });

  // If the type doesn't exist, make an object with error inside
  if (!tweetData) tweetData = { error: "Post doesn't exist!" };

  // Respond, using json, the type object
  res.json(tweetData);
});

app.get("/tweets/count/recent/:query", async (req, res) => {
  // Get the query from the url as specified in the get function
  const query = encodeURIComponent(req.params.query);
  let { data } = await getTweetsCount({ query });
  // console.log(data);

  // If the type doesn't exist, make an object with error inside
  if (!data) data = { error: "Post doesn't exist!" };

  // Respond, using json, the type object
  res.json(data);
});

app.get("/tweets/toptrends", async (req, res) => {
  let { data } = await getTopTrends();
  // console.log(data);

  // If the type doesn't exist, make an object with error inside
  if (!data) data = { error: "Post doesn't exist!" };

  // Respond, using json, the type object
  res.json(data);
});

app.get("/tweets/predict/category/:query", async (req, res) => {
  // Get the query from the url as specified in the get function
  const query = encodeURIComponent(req.params.query);
  const { data: tweetData } = await getRecentTweets({ query });
  // console.log(data);
  const { text } = concatTweets2Text({ data: tweetData, query: query });
  const { data: oiData } = await findCategory({ text });
  // console.log(oiData.label);

  // If the type doesn't exist, make an object with error inside
  if (!tweetData || !oiData) oiData = { error: "Post doesn't exist!" };

  // Respond, using json, the type object
  res.json(oiData);
});

app.get("/tweets/setall/category/:file", (req, res) => {
  if (!req.params.file) {
    res.json({ error: "Please provide filename!" });
  }

  const filepath = DIR_DATASET_PATH + encodeURIComponent(req.params.file);

  fs.readFile(filepath, "utf8", async (err, data) => {
    // If there was an error, throw it
    if (err) {
      res.json({ error: err.message });
    } else {
      // Or set filedata to the json
      let filedata = JSON.parse(data);

      console.time("-------setcat");
      if (filedata && filedata[0] && filedata[0].trends) {
        console.log("filepath:-----" + filepath);

        filedata = await processAndGather({ filedata });

        await saveFile({ filepath, filedata });
        res.json("!!!File written successfully!!!! All category");
        console.timeEnd("-------setcat");
      }
    }
  });
});

app.get("/tweets/data/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  if (!fileName) {
    res.json({ error: "Please provide filename!" });
  }
  const filePath = DIR_DATASET_PATH + encodeURIComponent(fileName);
  fs.readFile(filePath, "utf8", (err, data) => {
    // If there was an error, throw it
    if (err) {
      res.json({ error: err.message });
    } else {
      res.json(JSON.parse(data));
    }
  });
});

/* App Listen */
// Get port
const port = process.env.port || 5000;
// Set app to listen on port
app.listen(port, () => {
  // Show that the server is running
  console.log(`Server running on port ${port}.`);
});