var express = require('express');
var app = express();
var port = 1888;
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var router = express.Router();
var appRoutes = require('./app/routes/api')(router);
var path = require('path');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use('/api', appRoutes);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/tutorial', {
    useMongoClient: true
}, function (err) {
    if (err) {
        console.log('Not connect to the database' + err);
    }
    else {
        console.log('Successfully connected to mongodb');
    }
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname+'/public/app/views/index.html'));
});


app.listen(port, function () {
    console.log('Runing the server on port' + port)
});