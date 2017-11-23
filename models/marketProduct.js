var mongoose = require('mongoose');
var schema = mongoose.Schema;

var markedProductSchema = new schema({
	product: {
		type: schema.ObjectId,
		ref:"Product",
		require:true
	},
	market: {
		type: schema.ObjectId,
		ref:"Market",
		require:true
	},
	price: {
		type: Number
	}
});

module.exports = mongoose.model('MarketProduct', markedProductSchema);