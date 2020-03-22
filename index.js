const express = require("express");
const fetch = require("node-fetch");
const redis = require("redis");

const app = express();

const PORT = process.env.PORT || 5000; // Node Server PORT
const REDIS_PORT = process.env.PORT || 6379; // Redis Server PORT

//Creating Redis Client
const redisClient = redis.createClient(REDIS_PORT);

// Setting the Key value
const set = (key, value) => {
  redisClient.set(key, JSON.stringify(value));
};

// Getting the Key value
const get = (req, res, next) => {
  let key = req.route.path;

  redisClient.get(key, (err, data) => {
    if (err) res.status(400).send(err);
    if (data !== null) res.status(200).send(JSON.parse(data));
    else next();
  });
};

//Route
app.get("/posts", get, (req, res) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => res.status(400).send(err));
});

// To run the Server
app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
