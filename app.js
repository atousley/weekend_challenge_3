var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var math = require('./routes/math');
var add = require('./routes/add');
var sub = require('./routes/sub');
var mult = require('./routes/mult');
var divide = require('./routes/divide');


app.use(bodyParser.urlencoded({extended: true}));
app.set('port', process.env.PORT || 5000);

app.use('/math', math.router);
app.use('/add', add);
app.use('/sub', sub);
app.use('/mult', mult);
app.use('/divide', divide);

app.get('/*', function(req, res) {
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname, './public/', file));
});

app.listen(app.get('port'), function() {
    console.log('server is ready on port ' + app.get('port'));
});