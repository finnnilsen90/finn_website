const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');
const User = require('./models/user');

// const {google} = require('googleapis');
// const OAuth2Client = google.auth.OAuth2;

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const stringify = require('stringify');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/login')));
app.use(express.static(path.join(__dirname, 'public/images')));
app.use('/about', express.static(path.join(__dirname, 'public/app')));
app.use('/masterqa', express.static(path.join(__dirname, 'public/app')));
// app.use('/masterqa-auto.html', express.static(path.join(__dirname, 'public/app')));

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
});

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
        res.sendFile(path.join(__dirname,'/public/login-auto.html'));
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

app.get('/about', (req, res) => {
    console.log('session => ', req.session.user)
    if (req.session.user && req.cookies.auto_sid) {
        res.sendFile(__dirname + '/public/about-auto.html');
    } else {
        console.log('error')
        res.redirect('/login');
    }
});

app.get('/masterqa', (req, res) => {
    if (req.session.user && req.cookies.auto_sid) {
        res.sendFile(__dirname + '/public/masterqa-auto.html');
    } else {
        console.log('error')
        res.redirect('/login');
    }
});

app.post('/json_res', function(req, res) {

    let data_json = req.body || null;

    saveIDToPublicFolder(data_json, function(error) {
        
        if (error) {
            console.log('error')
            console.log(err)
            res.status(404).send('Spreadsheed ID not sent.');
            return;
        }
        res.status(200).send('ID sent!')
    });
});

function saveIDToPublicFolder(id, callback) {
    console.log('ID function => ', id);
    fs.writeFile('./python/CampaignMasterQA/spreadsheet.json', JSON.stringify(id), callback);
}


app.get('/python', function (req, res) {

    let python_cmd = 'python ' + path.join(__dirname,'python/CampaignMasterQA/run_report.py')

    console.log('python cmd => ', python_cmd);

    exec(python_cmd, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            res.status(500).send({error: 'python failed! ' + error})
            return;
        }
        console.log(`stdout: ${stdout}`)
        res.json(stdout);
    });  
   
});


app.get('/logout', function (req, res, next) {
    console.log('logout')
    console.log(req.session.user)
    console.log(req.cookies.auto_sid)
    if (req.session.user && req.cookies.auto_sid) {
        res.clearCookie('auto_sid');
        res.redirect('/login');
    } else {
        console.log('cookie problem')
        res.redirect('/login');
    }  
});

// route for handling 404 requests(unavailable routes
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
});

app.listen(app.get('port'), function() {
    console.log('listening on ', port)
});