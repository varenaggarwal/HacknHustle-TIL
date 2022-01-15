const app = require('express')();
const bodyParser = require("body-parser");
const path = require("path");
const fs = require('fs');
const { getRecentTweets, getTweetsCount, getTopTrends } = require('./lib/tweetsController');
const { concatTweets2Text } = require('./lib/tweetsService');
const { findCategory } = require('./lib/openApiController');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Dynamic API */
app.get("/tweets/search/recent/:query", async (req, res) => {
    // Get the query from the url as specified in the get function
    const query = encodeURIComponent(req.params.query);
    const { data: tweetData } = await getRecentTweets({query});

    // If the type doesn't exist, make an object with error inside
    if(!tweetData) tweetData = {"error":"Post doesn't exist!"};
    
    // Respond, using json, the type object
    res.json(tweetData);
});

app.get("/tweets/count/recent/:query", async (req, res) => {
  // Get the query from the url as specified in the get function
  const query = encodeURIComponent(req.params.query);
  let { data } = await getTweetsCount({query});
  // console.log(data);

  // If the type doesn't exist, make an object with error inside
  if(!data) data = {"error":"Post doesn't exist!"};
  
  // Respond, using json, the type object
  res.json(data);
});

app.get("/tweets/toptrends", async (req, res) => {
    let { data } = await getTopTrends();
  // console.log(data);

  // If the type doesn't exist, make an object with error inside
  if(!data) data = {"error":"Post doesn't exist!"};
  
  // Respond, using json, the type object
  res.json(data);
});

app.get("/tweets/predict/category/:query", async (req, res) => {
  // Get the query from the url as specified in the get function
  const query = encodeURIComponent(req.params.query);
  const { data: tweetData } = await getRecentTweets({query});
  // console.log(data);
  const text = concatTweets2Text(tweetData);
  const { data: oiData } = await findCategory({text});
  // console.log(oiData.label);

  // If the type doesn't exist, make an object with error inside
  if(!tweetData || !oiData) oiData = {"error":"Post doesn't exist!"};
  
  // Respond, using json, the type object
  res.json(oiData);
});

/* App Listen */
// Get port
const port = process.env.port || 5000;
// Set app to listen on port
app.listen(port, () => {
  // Show that the server is running
  console.log(`Server running on port ${port}.`);
});