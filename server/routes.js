const path = require('path');
let Sequelize = require('sequelize');
let hamburger = require('../data_files/base_menu.json');
const fs = require('fs');
const sendmail = require('sendmail')();

let site_map = require('../site_map.json');

console.log('PAGE => ',site_map.general.login_finn)

function route_select(server_bool,page) {
    let result = server_bool? '../components/'+page+'/example/index.html':'../../public/'+page+'.html';
    return result
};

module.exports = function(app,) {
    app.get('/', (req, res) => {
        res.redirect('/home');
    });

    app.get('/home', (req, res) => {
        res.sendFile(path.resolve(__dirname + route_select(site_map.environment_dev,site_map.general.home_finn)));
    });

    app.get('/resume', (req, res) => {
        res.sendFile(path.resolve(__dirname + route_select(site_map.environment_dev,site_map.general.resume_finn)));
    });

    app.get('/project', (req, res) => {
        res.sendFile(path.resolve(__dirname + route_select(site_map.environment_dev,site_map.general.projects_finn)));
    });

    app.get('/contact', (req, res) => {
        res.sendFile(path.resolve(__dirname + route_select(site_map.environment_dev,site_map.general.contact_finn)));
    });

    app.route('/email')
        .post((req, res, next) => {
            let email = req.body.email,
                subject = req.body.subject,
                message = req.body.message
            sendmail({
                from: email,
                to: 'fnilsen1051@gmail.com',
                subject: subject,
                html: message
            }, function(err, reply) {
                if (err) {
                    res.redirect('/contact?valid=false');
                    next()
                } else {
                    res.redirect('/contact?valid=true');
                    next()
                }
            })
        })

    // route for user Login
    // app.route('/login')
    //     .get(sessionChecker, (req, res) => {
    //         res.sendFile(path.resolve(__dirname + route_select(site_map.environment_dev,site_map.general.login_finn)));
    //     })
    //     .post((req, res, next) => {
    //         let username = req.body.username,
    //             password = req.body.password;

    //         if (username==='') {
    //             res.redirect('/login?valid=blank_username');
    //             next()
    //         } else if (password==='') {
    //             res.redirect('/login?valid=blank_password');
    //             next()
    //         } else {

    //             User.findOne({ where: { username: username } }).then(function (user) {
    //                 if (!user) {
    //                     console.log('wrong username');
    //                     res.redirect('/login?valid=wrong_username');
    //                     next()
    //                 } else if (!user.validPassword(password)) {
    //                     console.log('wrong password');
    //                     res.redirect('/login?valid=wrong_password');
    //                     next()
    //                 } else {
    //                     req.session.user = user.dataValues;
    //                     if(req.session.user.user_type==='admin') {
    //                         res.redirect('/create_login');
    //                     } else {
    //                         res.redirect('/form');
    //                     }
    //                     console.log('user authenticated');
    //                     console.log('user id => ',user.dataValues.id)
    //                     console.log('user type => ',user.dataValues.user_type)
    //                 }
    //             });
    //         }
    //     })



    // app.route('/create_login')
    //     .get((req, res) => {
    //         User.max('ID').then(max => {
    //             console.log('return => ',max)
    //             this.max_v = max;
    //         })
    //         if(req.session.user && req.cookies.auto_sid && req.session.user.user_type==='admin') {
    //             res.sendFile(path.join(__dirname,route_select(site_map.environment_dev,site_map.admin.create_finn)));
    //         } else {
    //             res.redirect('/login');
    //         }
    //     })
    //     .post((req, res, next) => {
    //         let first_name = req.body.first_name,
    //             last_name = req.body.last_name,
    //             username = req.body.email,
    //             email = username,
    //             password = req.body.password,
    //             user_type= req.body.admin===undefined?'user':req.body.admin;
    //             console.log('first name => ',first_name);
    //             console.log('last name => ',last_name);
    //             console.log('username => ',username);
    //             console.log('email => ',email);
    //             console.log('password => ',password);
    //             console.log('user type => ',user_type);
    //             console.log('ID => ',this.max_v + 1);
            
    //         User.create({
    //             ID: this.max_v + 1, 
    //             first_name: first_name,
    //             last_name: last_name,
    //             username: username,
    //             email: username,
    //             password: password,
    //             user_type: user_type
    //         })
    //         .then(user => {
    //             req.session.user = user.dataValues;
    //             res.redirect('/logout');
    //         })
    //         .catch(error => {
    //             console.log('error => ',error)
    //             res.redirect('/create_login');
    //         });

    //     });

    // app.route('/form')
    //     .get((req, res) => {
    //         if (req.session.user && req.cookies.auto_sid) {
    //             console.log('session started at submit')
    //             res.sendFile(path.join(__dirname,route_select(site_map.environment_dev,site_map.general.submit_finn)));
    //         } else {
    //             console.log('error')
    //             res.redirect('/login');
    //         }   
    //     })
    //     .post((req,res,next) => {
    //         let proj = req.body.project_name,
    //             company = req.body.company,
    //             proj_desc = req.body.project_description,
    //             date = req.body.date,
    //             budget = req.body.budget;
    //             console.log('ID => ',req.session.user.id);
    //             console.log('project name => ',proj);
    //             console.log('company name => ',company);
    //             console.log('description => ',proj_desc);
    //             console.log('date => ',date);
    //             console.log('budget => ',budget);

    //         Project.create({
    //             user_id: req.session.user.id,
    //             project_name: proj,
    //             company: company,
    //             description: proj_desc,
    //             date: date,
    //             budget: budget
    //         })
    //         .then(user => {
    //             res.redirect('/form?valid=success');
    //         })
    //         .catch(error => {
    //             console.log('error => ',error)
    //             res.redirect('/form?=error');
    //         });


    //     })

    app.get('/styleguide', (req, res) => {
            console.log('session => ', req.session.user)
            if (req.session.user && req.cookies.auto_sid) {
                console.log('session started at submit')
                res.sendFile(path.join(__dirname, dev? '../components/styleguide-finn/example/index.html':'../public/styleguide-finn.html'));
            } else {
                console.log('error')
                res.redirect('/login');
            }
        })


    app.get('/login_menu', (req,res,next) => {
        try {

            if (req.session.user===undefined) {
                res.json(hamburger.not_login);
            } else if(req.session.user.user_type==='admin') {
                res.json(hamburger.admin);
            } else {
                res.json(hamburger.logedin);
            }

        } catch(e) {
            console.log('No login data, sending default');
        }
    })

//     app.get('/logout', function (req, res, next) {
//         console.log('session user => ',req.session.user)
//         if (req.session.user && req.cookies.auto_sid) {
//             console.log('cookie cleared')
//             res.clearCookie('auto_sid');
//             res.redirect('/login');
//         } else {
//             console.log('cookie problem')
//             res.redirect('Error');
//         }  
//     });
}