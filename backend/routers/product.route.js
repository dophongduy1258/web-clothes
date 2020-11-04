var express = require('express');
var router = express.Router();
var controller = require('../controllers/product.controller');


router.get('',controller.Product);
// router.post('',controller.postDeleteBook);
// router.get('/addProduct');
router.post('/addProduct',controller.postCreateProduct);
// router.get('/edit/:id',controller.editBook);
// router.post('/edit/:id',controller.postEditBook);

module.exports = router;