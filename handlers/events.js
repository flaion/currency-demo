const eventEmitter          = require('events');
const event                 = new eventEmitter()
const RedisPub               = require('../handlers/redis').RedisPub;
const axios                 = require('axios');

event.on('get_currency_rates',() => {
    axios.get('http://www.apilayer.net/api/live?access_key=22ec9ed6b99d356a74d61efa2eff60f5&format=1').then(data => {
        RedisPub.publish("channel1", JSON.stringify(data.data.quotes));
    });
})

module.exports = event;