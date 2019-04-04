const express = require('express');
const bodyparser = require('body-parser');

const app = expess();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

module.exports = app;