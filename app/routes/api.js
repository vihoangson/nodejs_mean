var User = require('../models/user');
var jwt = require('jsonwebtoken');
var secret_string = 'sondeptrai';

module.exports = function (route) {
    route.post('/users', function (req, res) {
        if (req.body.username == null || req.body.username == "") {
            res.send('Ensure username were provided')
        } else {
            var user = new User();
            user.username = req.body.username;
            user.password = req.body.password;
            user.email = req.body.email;
            user.save(function (err) {
                if (err) {
                    res.json({success: false, message: 'Username or Email already exits!'});
                } else {
                    res.json({success: true, message: 'User created'});
                }
            });
        }
    });

    route.post('/authenticate', function (req, res) {
        if (req.body.username == null || req.body.username == '') {
            res.json({success: false, message: 'Don\'t have username'});
        } else {
            User.findOne({username: req.body.username}).select('email password username').exec(function (err, user) {
                if (err) throw err;
                if (!user) {
                    res.json({success: false, message: 'Error login'});
                } else if (user) {
                    var validPassword = user.comparePassword(req.body.password);

                    if (validPassword == true) {
                        var token = jwt.sign({
                            username: req.body.username,
                            email: req.body.email
                        }, secret_string, {expiresIn: '2h'})
                        res.json({success: true, message: 'Success login', token: token});

                    } else {
                        res.json({success: false, message: 'Error login'});
                    }
                }
            });
        }
    });

    route.use(function (req, res, next) {
        var token = req.body.token || req.body.query || req.headers['x-access-token'];
        if (token) {
            jwt.verify(token, secret_string, function (err, decoded) {
                if (err) {
                    res.json({success: false, message: ' Token invalid'});
                }else{
                    req.decoded = decoded;
                    next();
                }
            })
        } else {
            res.json({success: false, message: ' No token provider '})
        }
    });

    route.post('/me', function (req, res) {
        res.send(req.decoded);
    });
    return route;
}