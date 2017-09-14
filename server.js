// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
// var methodOverride = require('method-override');

// configuration ===========================================

var db;
var config = require('./config/config');

app.use(bodyParser.json()); // parse application/json 

app.use(express.static('./uploads'))


// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests

app.all('/*', function(req, res, next) {
       	res.header("Access-Control-Allow-Origin", "*");
       	res.header('Access-Control-Allow-Methods', "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  		res.header("Access-Control-Allow-Headers",'Content-Type, Accept, X-Access-Token');
       
		if(req.method == 'OPTIONS') {
       		res.status(200).end();
		}else {
			next();	
		}
});


// routes ==================================================
app.use('/', require('./routes')); // pass our application into our routes


app.use(function(req, res, next){
	res.status(404).json({status: "Page not found"}).end();
});



// start app ===============================================
app.set('port', config.port);
var server = app.listen(app.get('port'), function () {
});

// Database connections
 mongoose.connect(config.mongo.url, function(err, database) {
 	if(err) {
 		console.log(err);
 		process.exit(1);
 	}

 	db = database;
 	console.log("Database connetion ready!!")
 })
