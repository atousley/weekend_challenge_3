var express = require('express');
var router = express.Router();
var path = require('path');
var add = require('./add');
var values = [];
var answer = add.answer;

router.post('/', function(req, res) {
    values.push(req.body);
    res.send(values);
    res.send(answer);
    console.log(answer);
});

exports.router = router;
exports.values = values;