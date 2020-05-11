const path = require('path');
let hamburger = require('../data_files/base_menu.json');
const fs = require('fs');

module.exports = function(app,) {
    app.get('/', (req, res) => {
        res.redirect('/home');
    });

    app.get('/home', (req, res) => {
        res.sendFile(path.resolve(__dirname + '../../public/home-finn.html'));
    });

    app.get('/resume', (req, res) => {
        res.sendFile(path.resolve(__dirname + '../../public/resume-finn.html'));
    });

    app.get('/project', (req, res) => {
        res.sendFile(path.resolve(__dirname + '../../public/projects-finn.html'));
    });

    app.get('/contact', (req, res) => {
        res.sendFile(path.resolve(__dirname + '../../public/contact-finn.html'));
    });

    // app.route('/email')
    //     .post((req, res, next) => {
    //         let email = req.body.email,
    //             subject = req.body.subject,
    //             message = req.body.message
    //         sendmail({
    //             from: email,
    //             to: 'fnilsen1051@gmail.com',
    //             subject: subject,
    //             html: message
    //         }, function(err, reply) {
    //             if (err) {
    //                 res.redirect('/contact?valid=false');
    //                 next()
    //             } else {
    //                 res.redirect('/contact?valid=true');
    //                 next()
    //             }
    //         })
    //     })


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
            res.json(hamburger.not_login);
        }
    })

}