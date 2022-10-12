import express from 'express';
import apicache from "apicache";
import bodyParser from 'body-parser';
import routes from './routes.js' //importing rout
import redis from 'redis'

const app = express()
const port = process.env.PORT || 8989;



app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//configure apicache 
let cache = apicache.middleware
const client = redis.createClient(process.env.REDIS_PORT||6379, process.env.REDIS_HOST||localhost);
client.on('connect', function() {
    console.log('Redis Connected! sao');
  });

  console.log('Redis Connected! sao');
//caching all routes for 5 minutes
app.use(cache('15 minutes'))
routes(app)
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})
app.listen(port)
