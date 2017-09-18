var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create the Users Schema
var UsersSchema = new Schema ({
    name: String,
    age: Number
});

var model = mongoose.model('Users', UsersSchema);

//export the model to use in other files
module.exports = model;
