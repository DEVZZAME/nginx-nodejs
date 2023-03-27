const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index2');
    console.log('connected with 3006')
});

router.get('/test2', function(req, res, next) {
    res.render('index2_1');
    console.log('connected with 3006')
});

router.get('/test2/test2_1', function(req, res, next) {
    res.render('index2_1_1');
    console.log('connected with 3006')
});

module.exports = router;