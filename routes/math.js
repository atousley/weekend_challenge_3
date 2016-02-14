var express = require('express');
var router = express.Router();
var path = require('path');
var values = [];

router.post('/', function(req, res) {
    values.push(req.body);
    res.send(values);
    //console.log(values);
});

exports.router = router;
exports.values = values;