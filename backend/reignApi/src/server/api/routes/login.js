const express = require('express');
const authenticationCtrl = require('../../controllers/authentication.ctrl');

const app = express();

app.post('/v1/login', authenticationCtrl.postLogin);

module.exports = app;