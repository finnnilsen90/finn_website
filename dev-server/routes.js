const path = require('path');


function login(app,sessionChecker,User) {
    app.route('/login')
    .get(sessionChecker, (req, res) => {
        res.sendFile(path.join(__dirname,'/components/login-finn/example/index.html'));
    })
    .post((req, res, next) => {
        let username = req.body.username,
            password = req.body.password;

        if (username==='') {
            res.redirect('/login?valid=blank_username');
            next()
        } else if (password==='') {
            res.redirect('/login?valid=blank_password');
            next()
        } else {

            User.findOne({ where: { username: username } }).then(function (user) {
                if (!user) {
                    console.log('wrong username');
                    res.redirect('/login?valid=wrong_username');
                    next()
                } else if (!user.validPassword(password)) {
                    console.log('wrong password');
                    res.redirect('/login?valid=wrong_password');
                    next()
                } else {
                    req.session.user = user.dataValues;
                    res.redirect('/submit');
                    console.log('user authenticated');
                    console.log('user type => ',user.dataValues.user_type)
                }
            });
        }
    })
}

module.exports = {login}