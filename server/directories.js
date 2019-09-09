const express = require('express');
const path = require('path');
let site_map = require('../site_map.json');
let dev = site_map.environment_dev;

module.exports = function(app) {

    if (dev) {
        console.log('dev dir => ',__dirname.slice(0,-7))
        app.use(express.static(path.join(__dirname, '../components')));
        app.use('/login',express.static(path.join(__dirname, '../components/login-finn/example')));
        app.use('/home',express.static(path.join(__dirname, '../components/home-finn/example')));
        app.use('/form',express.static(path.join(__dirname, '../components/form-finn/example')));
        app.use('/create_login',express.static(path.join(__dirname, '../components/create-finn/example')));
    } else {
        console.log('dir => ',__dirname.slice(0,-7))
        app.use(express.static(path.join(__dirname, '../public')));
        app.use(express.static(path.join(__dirname, '../public/general')));
        app.use('/login',express.static(path.join(__dirname, '../public/general')));
        app.use('/form',express.static(path.join(__dirname, '../public/app')));
        app.use('/create_login',express.static(path.join(__dirname, '../public/admin')));
    }
}