var express = require('express');
var router = express.Router();
var products = require('./controllers/products.js');


router.get('/secure/users/', products.getAll);
router.get('/secure/user/:id', products.getOne);
router.post('/secure/user', products.create);
router.put('/secure/user/:id', products.update);
router.delete('/secure/user/:id', products.delete);

module.exports = router;
