const express = require('express');
const router = express.Router();

router
    .post('/', (req, res) => {
        var emailDetails = { ...req.body };
        console.log(emailDetails);
        res.render('email-templates/bank-details', {
            name: emailDetails.name,
            age: emailDetails.age
        })
        // res.send(emailDetails);
    })

module.exports = router;
