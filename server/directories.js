const express = require('express');
const path = require('path');

module.exports = function(app) {

    app.use(express.static(path.join(__dirname, '../public')));
    app.use('/login',express.static(path.join(__dirname, '../public/general')));
    app.use('/home',express.static(path.join(__dirname, '../public/general')));
    app.use('/resume',express.static(path.join(__dirname, '../public/general')));
    app.use('/project',express.static(path.join(__dirname, '../public/general')));
    app.use('/contact',express.static(path.join(__dirname, '../public/general')));
    app.use('/form',express.static(path.join(__dirname, '../public/app')));
    app.use('/create_login',express.static(path.join(__dirname, '../public/admin')));
    
}