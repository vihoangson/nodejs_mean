var express = require('express');
var app = express();
var port = 3000;
var mongoose = require('mongoose');
var morgan = require('morgan');
var User = require('./app/models/user');
var path = require('path');
var bodyParser = require('body-parser');
var routes = express.Router();
var appRoutes = require('./app/routes/api')(routes);

mongoose.Promise = global.Promise;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', appRoutes);

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

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname+'/public/app/views/index.html'));
});


app.listen(port, function () {
    console.log('Runing the server on port' + port)
});