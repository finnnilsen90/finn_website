const express = require('express');
const path = require('path');

module.exports = function(app) {
    // app.use(express.static(path.join(__dirname, 'components')));
    app.use(express.static(path.join(__dirname, '../public')));
    app.use(express.static(path.join(__dirname, '../public/general')));
    app.use('/form',express.static(path.join(__dirname, '../public/app')));
    app.use('/create_usr',express.static(path.join(__dirname, '../public/admin')));
}