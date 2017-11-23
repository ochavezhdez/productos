var mongoose = require('mongoose');
var schema = mongoose.Schema;

var marketSchema = new schema({
	name: {
		type: String
	},
	addres: {
		type: String
	},
	latitude: {
		type: Number
	},
	longitude: {
		type: Number
	}
});

module.exports = mongoose.model('Market', marketSchema);