const express = require('express');
const path = require('path');

module.exports = function(app) {
    app.use(express.static(path.join(__dirname, '../components/login-finn/example')));
    app.use('/submit',express.static(path.join(__dirname, '../components/submit-finn/example')));
    app.use('/styleguide',express.static(path.join(__dirname, '../components/styleguid-finn/example')));
}