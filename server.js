var express = require('express');
var app = express ();
var port = 3000;
var mongoose = require('mongoose');
var morgan = require('morgan');
var User = require('./app/models/user');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'));

mongoose.connect('mongodb://localhost:27017/tutorial',{
	useMongoClient: true
},function(err){
	if(err){
	console.log('Not connect to the database'+ err);
}
else{
	console.log('Successfully connected to mongodb');
}
});
 



app.post('/user',function(req,res){
	var user = new User();


	user.username = req.body.username;
	user.password = req.body.password;
	user.email = req.body.email;
	user.save();
	res.send('user created');

});


app.listen(port,function(){
	console.log('Runing the server on port' + port)
});