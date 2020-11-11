var express = require('express');
var router = express.Router();
var controller = require('../controllers/product.controller');


router.get('',controller.getProduct);
router.post('/add',controller.add);
router.get('/edit/:id',controller.edit);
router.put('/update/:id',controller.update);


module.exports = router;