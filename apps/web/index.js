var express = require('express.io');
var app = module.exports = express()
	, path = require('path');

app.http().io();
app.configure(function(){
	  app.set('views', __dirname + '/views');
	  app.set('view engine', 'jade');
	  app.use(express.favicon());
	  app.use(express.compress());
	  app.use(express.bodyParser({uploadDir:'./web/public/uploads'}));
	  app.use(express.methodOverride());
	  app.use(express.static(path.join(__dirname, 'public')));
	  app.use(express.logger());
	  app.use(app.router);
          app.locals.basedir = __dirname;
	});


app.configure('development', function(){
	  app.use(express.errorHandler());
});

app.get('/login',require('./routes/user').login);
app.get('/',require('./routes/main').feed);

console.log("========================================================================");
console.log("================== Project Change The World Started ====================");
console.log("========================================================================");