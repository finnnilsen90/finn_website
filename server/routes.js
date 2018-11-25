const path = require('path');
let hamburger = require('../data_files/base_menu.json')

module.exports = function login(app,sessionChecker,User) {
    
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
                        res.redirect('/submit');
                        console.log('user authenticated');
                        console.log('user type => ',user.dataValues.user_type)
                    }
                });
            }
        })



    app.route('/create')
        .get(sessionChecker, (req, res) => {
            res.sendFile(path.join(__dirname,'../public/create-finn.html'));
        })
        .post((req, res, next) => {
            let first_name = req.body.first_name,
                last_name = req.body.last_name,
                username = req.body.username,
                email = username,
                password = req.body.password,
                user_type= req.body.user_type;
            
            User.create({
                ID: User.sequelize.max('ID').then(max => {}) + 1, 
                first_name: first_name,
                last_name: last_name,
                username: username,
                email: username,
                password: password_var,
                user_type: user_type
            })

        });

    app.get('/submit', (req, res) => {
            console.log('session => ', req.session.user)
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
                res.sendFile(path.join(__dirname,'../public/styleguid-finn.html'));
            } else {
                console.log('error')
                res.redirect('/login');
            }
        })

    app.get('/login_menu', (req,res,next) => {
        console.log(hamburger.logedin)
        res.json(hamburger.logedin);
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