var express = require('express');
var router = express.Router();
var path = require('path');
var math = require('./math');
var values = math.values;
var answer = 0;

function addVals() {
    var val1 = parseInt(values[0].val1);
    var val2 = parseInt(values[0].val2);
    answer = val1 + val2;
}

router.get('/', function(req, res) {
    addVals();
    res.send(answer);
    console.log(answer);
});

//router.post('/', function(req, res) {
//    values.push(req.body);
//    //console.log(req.body);
//    res.send(values);
//    console.log(values);
//
//});


module.exports = router;