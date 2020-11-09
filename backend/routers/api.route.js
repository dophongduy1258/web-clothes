var express = require('express');
var router = express.Router();
var controller = require('../controllers/product.controller');


router.get('',controller.getProduct);
router.post('/add',controller.getData);



module.exports = router;