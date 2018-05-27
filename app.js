const express = require('express');
const bodyParser = require('body-parser');
const emails = require('./routes/emails');
const app = express();

// use the router as middleware
app
    .use (bodyParser.json())
    .use('/emails', emails);


app.listen(3000);