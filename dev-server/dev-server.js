const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');
const User = require('../models/user');

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const stringify = require('stringify');

const app = express();

let port = process.env.PORT || 3000;

// set our application port
app.set('port', port);

app.use(morgan('dev'));

// initialize body-parser to parse incoming parameters requests to req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// initialize cookie-parser to allow us access the cookies stored in the browser. 
app.use(cookieParser());

// const directories = require('./dev-directories.js')(app);
const sessionChecker = require('./session_checker.js');
app.use(express.static(path.join(__dirname, '../components')));

app.use(session({
    key: 'auto_sid',
    secret: 'finnssecret',
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

// route for handling 404 requests(unavailable routes
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
});

app.listen(app.get('port'), function() {
    console.log('listening on ', port)
});