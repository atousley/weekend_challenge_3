var express = require('express');
var router = express.Router();
var path = require('path');
var values = [];
var answer = 0;

router.post('/', function(req, res) {
    values.push(req.body);
    addVals();
    res.send(answer);
    console.log(answer);
});

function addVals() {
    var val1 = parseInt(values[0].val1);
    var val2 = parseInt(values[0].val2);
    answer = val1 + val2;
    answer = answer.toString();
}

exports.router = router;
exports.answer = answer;
