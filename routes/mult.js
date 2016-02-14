var express = require('express');
var router = express.Router();
var path = require('path');
var values = [];
var answer = 0;

router.post('/', function(req, res) {
    values = [];
    values.push(req.body);
    multVals();
    res.send(answer);
});

function multVals() {
    var val1 = parseInt(values[0].val1);
    var val2 = parseInt(values[0].val2);
    answer = val1 * val2;
    answer = answer.toString();
}

module.exports = router;