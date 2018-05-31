var express = require('express');
var router = express.Router();

/* GET email templates */
router
  .get('/', function(req, res, next) {
    res.send('respond with a resource');
  })
  .post('/', (req, res) => {
    var emailDetails = { ...req.body };
    console.log(emailDetails);
    res.render('layout', {
        name: emailDetails.name,
        age: emailDetails.age,
        partials: {
          bankDetails: "bank-details"
        }
    })
    // res.send(emailDetails);
  })

module.exports = router;
