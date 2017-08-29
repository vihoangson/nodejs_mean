var User = require('../models/user');

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
                    res.send(err);
                } else {
                    res.send('user created');
                }
            });
        }
    });


    return route;
}