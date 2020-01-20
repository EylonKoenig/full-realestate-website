var express = require('express');
var router = express.Router();
var { getUser } = require('../db/register')

router.get('/', function(req, res, next) {
    getUser()
        .then(user => res.status(200).json(user))
        .catch(error => res.status(500).json({ error: error.message }));
});



module.exports = router;