
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

