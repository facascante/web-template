var express = require('express.io');
var app = exports.app = express();
app.use(express.vhost('localhost',require('./apps/web')));
//app.use(express.vhost('localhost',require('./apps/hr')));
app.listen(8080)