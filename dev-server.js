const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');
const User = require('./models/user');

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const stringify = require('stringify');

const app = express();

app.use(express.static(path.join(__dirname, 'components/login-finn/example')))

let port = process.env.PORT || 3000;

// set our application port
app.set('port', port);

app.use(morgan('dev'));

// initialize body-parser to parse incoming parameters requests to req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// initialize cookie-parser to allow us access the cookies stored in the browser. 
app.use(cookieParser());

// initialize express-session to allow us track the logged-in user across sessions.
app.use(session({
    key: 'auto_sid',
    secret: 'somerandonstuffstwo',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));

app.use((req, res, next) => {
    if (req.cookies.auto_sid && !req.session.user) {
        res.clearCookie('auto_sid');        
    }
    next();
})

// middleware function to check for logged-in users
let sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.auto_sid) {
        console.log('session live')
        res.redirect('/about');
    } else {
        console.log('session checked')
        next();
    } 
};

app.get('/', sessionChecker, (req, res) => {
    res.redirect('/login');
});

// route for user Login
app.route('/login')
    .get(sessionChecker, (req, res) => {
        res.sendFile(path.join(__dirname,'/components/login-finn/example/index.html'));
    })
    .post((req, res, next) => {
        let username = req.body.username,
            password = req.body.password;

        User.findOne({ where: { username: username } }).then(function (user) {
            if (!user) {
                console.log('wrong username');
                res.json('wrong username');
            } else if (!user.validPassword(password)) {
                console.log('wrong password');
                res.json('wrong password');
            } else {
                req.session.user = user.dataValues;
                res.redirect('/about');
                console.log('user authenticated');
            }
        });
        
    });

app.route('/create')
    .get(sessionChecker, (req, res) => {
        res.sendFile(path.join(__dirname,'/components/create-finn/example/index.html'));
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


// route for handling 404 requests(unavailable routes
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
});

app.listen(app.get('port'), function() {
    console.log('listening on ', port)
});