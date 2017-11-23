var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer();
var marketModel = require('../models/market');
var productModel = require('../models/product');
var marketProductModel = require('../models/marketProduct');
var marketCtrl = require('../controllers/marketCtrl');
var productCtrl = require('../controllers/productCtrl');
var marketProductCtrl = require('../controllers/marketProductCtrl');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route('/market')
	.post(upload.array(), marketCtrl.addMarket)							// Adiciona un nuevo mercado.

	.get(marketCtrl.getMarkets);										// Obtiene un listado con la información de todos los mercados.

router.route('/market/:idm')
	.get(marketCtrl.getMarketById)										// Obtiene la información del mercado marcado con idm.

	.put(upload.array(), marketCtrl.updateMarketById)					// Actualiza la información del mercado marcado con idm.

	.delete(marketCtrl.deleteMarketById);								// Elimina el mercado marcado con idm y todos los productos asociados a él.

router.route('/product')
	.post(upload.array(), productCtrl.addProduct)						// Adiciona un nuevo producto.

	.get(productCtrl.getProducts);										// Obtiene un listado con la información de todos los productos.

router.route('/product/:idp')
	.get(productCtrl.getProductById)									// Obtiene la información del producto marcado con idp.

	.put(upload.array(), productCtrl.updateProductById);				// Actualiza la información del producto marcado con idp.

router.route('/market/:idm/product/:idp')
	.post(upload.array(), marketProductCtrl.addProductToMarket)			// Adiciona un producto a un mercado.

	.put(upload.array(), marketProductCtrl.updateProductFromMarket);	// Actualiza la información de un producto en un mercado.

	.delete(marketProductCtrl.deleteProductFromMarket);					// Elimina del mercado marcado con idm el producto asociado con idp.

router.route('/marketProduct')
	.get(marketProductCtrl.getProducts);								// Elimina del mercado marcado con idm el producto asociado con idp.

module.exports = router;
