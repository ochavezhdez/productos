var mongoose = require('mongoose');
var marketModel = mongoose.model('Market');
var productModel = mongoose.model('Product');
var marketProductModel = mongoose.model('MarketProduct');

exports.addProductToMarket = function(req, res, next) {
	var marketProduct = new marketProductModel({
		product: req.params.idp,
		market: req.params.idm,
		price: req.body.price
	});

	marketProduct.save(function(err, marketProduct) {
		if (err) {
			return res.status(500, err.message);
		}

		marketModel.populate(marketProduct, {path: "market"}, function(err, marketProduct) {
			if (err) {
				return res.status(500, err.message);
			}

			productModel.populate(marketProduct, {path: "product"}, function(err, marketProduct) {
				if (err) {
					return res.status(500, err.message);
				}

				res.status(200).jsonp(marketProduct);
			});
		});
	});
};

exports.updateProductFromMarket = function(req, res, next) {
	marketProductModel.update({product: req.params.idp, market: req.params.idm}, 
		{
			product: req.params.idp,
			market: req.params.idm,
			price: req.body.price
		}, { multi: true }, function (err, numAffected) {
			if (err) {
				return res.status(500, err.message);
			}

			marketProductModel.find(function(err, marketProduct) {
				if (err) {
					return res.status(500, err.message);
				}

				marketModel.populate(marketProduct, {path: "market"}, function(err, marketProduct) {
					if (err) {
						return res.status(500, err.message);
					}

					productModel.populate(marketProduct, {path: "product"}, function(err, marketProduct) {
						if (err) {
							return res.status(500, err.message);
						}

						res.status(200).jsonp(marketProduct);
					});
				});
			});
		}
	);
};

exports.deleteProductFromMarket = function(req, res, next) {
	marketProductModel.remove({market: req.params.idm, product: req.params.idp}, function(err, marketProduct) {
		if (err) {
			return res.status(500, err.message);
		}

		marketModel.populate(marketProduct, {path: "market"}, function(err, marketProduct) {
			if (err) {
				return res.status(500, err.message);
			}

			productModel.populate(marketProduct, {path: "product"}, function(err, marketProduct) {
				if (err) {
					return res.status(500, err.message);
				}

				res.status(200).jsonp(marketProduct);
			});
		});
	});
};

exports.getProducts = function(req, res, next) {
	marketProductModel.find(req.query, function(err, marketProduct) {
		if (err) {
			return res.status(500, err.message);
		}

		marketModel.populate(marketProduct, {path: "market"}, function(err, marketProduct) {
			if (err) {
				return res.status(500, err.message);
			}

			productModel.populate(marketProduct, {path: "product"}, function(err, marketProduct) {
				if (err) {
					return res.status(500, err.message);
				}

				res.status(200).jsonp(marketProduct);
			});
		});
	});
};

exports.deleteProductById = function(req, res, next) {
	marketProductModel.remove({_id: req.params.idm}, function(err, marketProduct) {
		if (err) {
			return res.status(500, err.message);
		}
		
		res.status(200).jsonp(marketProduct);
	});
};
