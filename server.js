
var Model = require('./models/models.js');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//morgan is a templating engine
var morgan = require('morgan');


//need tp declare an instance of an app express
var app = express();

//configure the database
var db = "mongodb://localhost/mean-stack-from-scratch";

//connect to the db
mongoose.connect(db, function(err, response){
    if(err){ //check the connection
		console.log('Failed to connected to ' + db);
	}
	else {
		console.log('Connected to ' + db);
	}
});

var router = express.Router();


//GET-this will configure the get route to access the DB
router.get('/api/users', function(request, response){
	//this starts a MongoDB query to find the users in the database
	Model.find({}, function(err, users){ //check for an error accessing the DB
		if(err){
			response.status(404).send(err); /*this says that is there is an error, send the status code 404 back to the client */
		} else {
			response.status(200).send(users);
		}

	})
})


//middleware to create the router for the application
//this can be done without express, but we'll use express and configure the API endpoints



app.use('/', router);


//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//enables use of logger
app.use(morgan('dev'));

//middleware to use static files using express static method
app.use(express.static(__dirname + '/public'));



app.listen(3000, function(){
    console.log('listening on port 3000');
})

