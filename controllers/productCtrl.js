var mongoose = require('mongoose');
var productModel = mongoose.model('Product');

exports.addProduct = function(req, res, next) {
	var product = new productModel({
		name: req.body.name,
		description: req.body.description
	});

	product.save(function(err, product) {
		if (err) {
			return res.status(500, err.message);
		}
		res.status(200).jsonp(product);		
	});
};

exports.getProducts = function(req, res, next) {
	productModel.find(req.query, function(err, products) {
		if (err) {
			return res.status(500, err.message);
		}
		
		res.status(200).jsonp(products);
	});
};

exports.getProductById = function(req, res, next) {
	productModel.find({_id: req.params.idp}, function(err, product) {
		if (err) {
			return res.status(500, err.message);
		}
		res.status(200).jsonp(product);
	});
};

exports.updateProductById = function(req, res, next) {
	var product = new productModel({
		name: req.body.name,
		description: req.body.description
	});

	productModel.update({_id: req.params.idp}, 
		{
			product
		}, { multi: true }, function (err, numAffected) {
			if (err) {
				return res.status(500, err.message);
			}
			res.status(200).jsonp(product);
		}
	);
};
