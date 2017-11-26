var mongoose = require('mongoose');
var marketModel = mongoose.model('Market');

exports.addMarket = function(req, res, next) {
	var market = new marketModel({
		name: req.body.name,
		addres: req.body.addres,
		latitude: req.body.latitude,
		longitude: req.body.longitude
	});

	market.save(function(err, market) {
		if (err) {
			return res.status(500, err.message);
		}
		res.status(200).jsonp(market);
	});
};

exports.getMarkets = function(req, res, next) {
	marketModel.find(req.query, function(err, markets) {
		if (err) {
			return res.status(500, err.message);
		}
		
		res.status(200).jsonp(markets);
	});
};

exports.getMarketById = function(req, res, next) {
	marketModel.find({_id: req.params.idm}, function(err, market) {
		if (err) {
			return res.status(500, err.message);
		}

		res.status(200).jsonp(market);
	});
};

exports.updateMarketById = function(req, res, next) {

	marketModel.update({_id: req.params.idm}, 
		{			
			name: req.body.name,
			addres: req.body.addres,
			latitude: req.body.latitude,
			longitude: req.body.longitude
		}, { multi: true }, function (err, numAffected) {
			if (err) {
				return res.status(500, err.message);
			}

			marketModel.find({_id: req.params.idm}, function(err, market) {
				if (err) {
					return res.status(500, err.message);
				}

				res.status(200).jsonp(market);
			});
		}
	);
};

exports.deleteMarketById = function(req, res, next) {
	marketModel.find({_id: req.params.idm}, function(err, market) {
		if (err) {
			return res.status(500, err.message);
		}

		marketModel.remove({_id: req.params.idm}, function(err) {
			if (err) {
				return res.status(500, err.message);
			}
			
			res.status(200).jsonp(market);
		});
	});
};
