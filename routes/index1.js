const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index1');
    console.log('connected with 3006')
});

router.get('/test1', function(req, res, next) {
    res.render('index1_1');
    console.log('connected with 3006')
});

router.get('/test1/test1_1', function(req, res, next) {
    res.render('index1_1_1');
    console.log('connected with 3006')
});

module.exports = router;