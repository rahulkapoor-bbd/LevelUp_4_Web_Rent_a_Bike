const express = require('express');
const apiRouter = require('./routes');

const app = express();

app.use(express.json());
app.use(apiRouter);
app.listen('4206', () => {
    console.log('Listening on 4206')
});
