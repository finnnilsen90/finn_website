const path = require('path');
let Sequelize = require('sequelize');
let hamburger = require('../data_files/base_menu.json')

module.exports = function(app,sessionChecker,User) {
    app.get('/', sessionChecker, (req, res) => {
        res.redirect('/login');
    });

    // route for user Login
    app.route('/login')
        .get(sessionChecker, (req, res) => {
            res.sendFile(path.join(__dirname,'../public/login-finn.html'));
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
                        if(req.session.user.user_type==='admin') {
                            res.redirect('/create_login');
                        } else {
                            res.redirect('/form');
                        }
                        console.log('user authenticated');
                        console.log('user type => ',user.dataValues.user_type)
                    }
                });
            }
        })



    app.route('/create_login')
        .get((req, res) => {
            User.max('ID').then(max => {
                console.log('return => ',max)
                this.max_v = max;
            })
            if(req.session.user && req.cookies.auto_sid && req.session.user.user_type==='admin') {
                res.sendFile(path.join(__dirname,'../public/create-finn.html'));
            } else {
                res.redirect('/login');
            }
        })
        .post((req, res, next) => {
            let first_name = req.body.first_name,
                last_name = req.body.last_name,
                username = req.body.email,
                email = username,
                password = req.body.password,
                user_type= req.body.admin===undefined?'user':req.body.admin;
                console.log('first name => ',first_name);
                console.log('last name => ',last_name);
                console.log('username => ',username);
                console.log('email => ',email);
                console.log('password => ',password);
                console.log('user type => ',user_type);
                console.log('ID => ',this.max_v + 1);
            
            User.create({
                ID: this.max_v + 1, 
                first_name: first_name,
                last_name: last_name,
                username: username,
                email: username,
                password: password,
                user_type: user_type
            })
            .then(user => {
                req.session.user = user.dataValues;
                res.redirect('/logout');
            })
            .catch(error => {
                console.log('error => ',error)
                res.redirect('/create_login');
            });

        });

    app.get('/form', (req, res) => {
            if (req.session.user && req.cookies.auto_sid) {
                console.log('session started at submit')
                res.sendFile(path.join(__dirname,'../public/submit-finn.html'));
            } else {
                console.log('error')
                res.redirect('/login');
            }
        })

    app.get('/styleguide', (req, res) => {
            console.log('session => ', req.session.user)
            if (req.session.user && req.cookies.auto_sid) {
                console.log('session started at submit')
                res.sendFile(__dirname + '../public/styleguid-finn.html');
            } else {
                console.log('error')
                res.redirect('/login');
            }
        })

    app.get('/login_menu', (req,res,next) => {
        if(req.session.user.user_type==='admin') {
            res.json(hamburger.admin);
        } else {
            res.json(hamburger.logedin);
        }
    })

    app.get('/logout', function (req, res, next) {
        console.log('session user => ',req.session.user)
        if (req.session.user && req.cookies.auto_sid) {
            console.log('cookie cleared')
            res.clearCookie('auto_sid');
            res.redirect('/login');
        } else {
            console.log('cookie problem')
            res.redirect('Error');
        }  
    });
}