require('dotenv').config();
const PORT = process.env.PORT;
const db = require('./dbconnection/db');
const express = require('express');
const path = require('path');

//api routers
const apiRouter = require('./routes');

db.connect();
const app = express();

//view setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', apiRouter);

app.use(express.json());
app.use(apiRouter);
app.listen(PORT, () => {
    console.log('Listening on '+ PORT);
});