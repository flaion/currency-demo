const RedisSub          = require('../handlers/redis').RedisSub;
const RedisPub          = require('../handlers/redis').RedisPub;
const axios             = require('axios');

module.exports.index = function(req , res) {
    RedisSub.subscribe("channel1");
    return res.render('home');
    
}