# Caching API with Node and Redis

Sometimes your Backend server need to talk with third party APIs and Database. These calls are expensive both in time and money and also, it can create performance issues. A simple solution for this issue is Caching.

For Caching in our app, we are gonna use Redis.

### About Redis

Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker. It supports data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs, geospatial indexes with radius queries and streams. Visit the [link](https://redis.io/) for documentation and to download Redis.

## Getting Started

```
git clone https://github.com/jeyk333/Caching-API-with-Node-and-Redis.git

cd Caching-API-with-Node-and-Redis

npm install

node index.js
```

## Dependencies Used

- express - ^4.17.1
- node-fetch - ^2.6.0
- redis - ^3.0.2
