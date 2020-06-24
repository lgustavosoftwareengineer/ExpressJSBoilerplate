const express = require('express');
const routes = require('./routes');
const db = require('./database/connection');
const app = express();

app.use(routes)


module.exports = app;