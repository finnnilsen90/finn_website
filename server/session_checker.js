// middleware function to check for logged-in users

// initialize express-session to allow us track the logged-in user across sessions.

let sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.auto_sid) {
        console.log('session live')
        res.redirect('/submit');
    } else {
        console.log('session checked')
        next();
    } 
};

module.exports = sessionChecker