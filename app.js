const express = require('express');
const bodyParser = require('body-parser');
const emails = require('./routes/emails');
const app = express();
const hbs = require('express-handlebars');

// view engine setup
app
    .engine('hbs', hbs({extname: 'hbs', layoutsDir: __dirname + '/views/email-templates/'}))
    .set('views', __dirname + '/views')
    .set('view engine', 'hbs')

// use the router as middleware
    // .get('/', (req, res) => {
    //     var bankAccount = 066616102;
    //     res.render('email-templates/bank-details', {
    //         bankAccount: bankAccount
    //     })
    // })
    .use (bodyParser.json()) // destructure the payload into an variable and then render it in the view
    .use('/emails', emails);


app.listen(3000);