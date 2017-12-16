const express               = require('express');
const path                  = require('path');
const http                  = require('http');
const pug                   = require('pug');
const router                = express.Router();

const app                   = express();
const server                = http.createServer(app);
const io                    = require('socket.io')(server);
const RedisSub              = require('./handlers/redis').RedisSub;

const event                 = require('./handlers/events');


// Middlewares
app.set('view engine', "pug");
app.set('views', path.join(__dirname,"views"));
app.use(router);

// Routes
const home_routes           = require('./routes/home');


router.use('/',home_routes);

server.listen(3000, function() {
    console.log(`Server Running on PORT 3000 👍`);
})

io.on('connection', (socket) => {
    setInterval(() => { event.emit('get_currency_rates')},15000)
    RedisSub.on('message', function(channel, message) {
        socket.emit('channel1', message);
    })
})


