const redis                 = require('redis');
const redisPub              = redis.createClient({ host: 'localhost', db: 5 });
const redisSub              = redis.createClient({ host: 'localhost', db: 5 });
const redisClient           = redis.createClient({ host: 'localhost', db: 5 });

exports.RedisPub                    = redisPub;
exports.RedisSub                    = redisSub;
exports.Redisclient                 = redisClient;