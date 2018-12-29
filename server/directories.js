const express = require('express');
const path = require('path');

module.exports = function(app) {
    console.log('dir => ',__dirname.slice(0,-7))
    // app.use(express.static(path.join(__dirname, 'components')));
    app.use(express.static(path.join(__dirname, '../public')));
    app.use(express.static(path.join(__dirname, '../public/general')));
    app.use('/form',express.static(path.join(__dirname, '../public/app')));
    app.use('/create_login',express.static(path.join(__dirname, '../public/admin')));
}