exports.index = function(req, res){
    res.render('login', {title: 'Take Your Meds'});


    console.log(req.session.data);
};

exports.post = function(req, res){

    var db = require('./../db');

    db.User.findOne({email: req.body.email, password: req.body.password}, function(err, user){
        if (err){
            console.log("Error finding user with credentials");
        }

        if (user){
            req.session.user = user;
            res.send(user);
//            res.end();
        } else {
            res.end('Invalid credentials');
        }
    });
};