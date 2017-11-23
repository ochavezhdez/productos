var mongoose = require('mongoose');
var schema = mongoose.Schema;

var productSchema = new schema({
	name: {
		type: String
	},
	description: {
		type: String
	}
});

module.exports = mongoose.model('Product', productSchema);