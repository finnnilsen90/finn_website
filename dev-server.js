const express = require('express');
const router = express.Router();
const app = express();
const path = require('path');
const { exec } = require('child_process');
const bodyParser = require('body-parser');
const stringify = require('stringify');
const fs = require('fs');
const bcrypt = require('bcryptjs');

app.use(express.static(path.join(__dirname, 'components')))


app.listen(3000, function() {
    console.log('listening on 3000')
});