var express = require('express');
var router = express.Router();
// var controller = require('../controllers/book.controller');

router.get('',controller.home);
// router.post('',controller.postDeleteBook);
// router.get('/create',controller.createBook);
// router.post('/create',controller.postCreateBook);
// router.get('/edit/:id',controller.editBook);
// router.post('/edit/:id',controller.postEditBook);

module.exports = router;