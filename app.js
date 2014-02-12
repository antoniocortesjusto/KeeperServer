
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var services = require('./routes/services');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


// Enable Cross-Origin-Access
app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
 });

app.get('/', function (req, res){
	res.redirect('http://awesome.do');
});


//Save temperature on DB
app.post("/temp", function (req, res){
	var data = req.body;
	var temp = data.temp.toString();

	console.log("Temperature:" + temp);

	services.saveTemperature(temp, function (error, data){

		if(error){
			console.log("saveTemperature error!! ");
			res.send("An Error occurred", 404);
			
		}
		else{
			res.send(data);
		}
	});
});




app.post("/ping", function (req, res){
	
	services.ping( function (error, data){
		if(error){
			res.send("An Error occurred", 404);
		}
		else{
			res.send(data);
		}
	});
});





http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
