const express = require('express');
const path = require('path');

module.exports = function(app) {
    // app.use(express.static(path.join(__dirname, 'components')));
    app.use(express.static(path.join(__dirname, '../public')));
    app.use(express.static(path.join(__dirname, '../public/login')));
    app.use('/submit',express.static(path.join(__dirname, '../public/app')));
}