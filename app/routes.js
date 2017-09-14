var express = require('express');
var router = express.Router();
var products = require('./controllers/mainCtrl.js');


router.get('/myapi/products/', products.getAll);
// router.get('/myapi/products/:id', products.getOne);
// router.put('/myapi/products/:id', products.update);
// router.delete('/myapi/products/:id', products.delete);

module.exports  = router;
