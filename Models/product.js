var mongoose    = require("mongoose");
var Schema     = mongoose.Schema;

var product = new Schema({
	firstName: String,
	lastName:String,
	email:String,
	password:String
});

module.exports = mongoose.model("product", product); 