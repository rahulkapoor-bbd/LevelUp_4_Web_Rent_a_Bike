require('dotenv').config();
const PORT = process.env.PORT;
const db = require('./dbconnection/db');
const express = require('express');
const apiRouter = require('./routes');

/*
db.connect();
*/
const app = express();

app.use(express.json());
app.use(apiRouter);
app.listen(PORT, () => {
    console.log('Listening on '+ PORT);
});
