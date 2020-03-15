// middleware function to check for logged-in users

// initialize express-session to allow us track the logged-in user across sessions.

let sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.auto_sid) {
        console.log('session live')
        if(req.session.user.user_type==='admin') {
            res.redirect('/create_login');
        } else {
            res.redirect('/form');
        }
    } else {
        console.log('session checked')
        next();
    } 
};

module.exports = sessionChecker