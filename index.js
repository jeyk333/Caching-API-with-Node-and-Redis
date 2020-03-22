const express = require("express");
const fetch = require("node-fetch");

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/posts", (req, res) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => res.status(400).send(err));
});

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
