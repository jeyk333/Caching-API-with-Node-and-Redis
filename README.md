# Caching API with Node and Redis

Sometimes your Backend server need to talk with third party APIs and Database. These calls are expensive both in time and money and also, it can create performance issues. A simple solution for this issue is Caching.

For Caching in our app, we are gonna use Redis.

### About Redis

Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker. It supports data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs, geospatial indexes with radius queries and streams. Visit the [link](https://redis.io/) for documentation and to download Redis.

### How it works

In this application, I have used [JSONplaceholder REST API](https://jsonplaceholder.typicode.com/). When you call the api at first time. It will more time to get data. But, at the second, it will take way less time than before. This is because the cache doesn’t have that key present and has now updated it. So, on calling second time, you'll be able see the difference.

One very obvious pitfall in this implementation is that once we add it to the cache, we will never fetch the updated value from the third-party API. This probably isn’t the expected behavior. One way to counter this is to use setex which takes an expiry argument. It essentially runs two atomic operations. SET and EXPIRE. After the set expiry period, we fetch the data again from the third party API and update the cache.

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
