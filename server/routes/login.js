var express = require('express');
var router = express.Router();
var { getUser } = require('../db/login')

router.post('/', function(req, res, next) {
    getUser(req.body)
        .then(user => {
            res.cookie("my-cookie", { user })
            res.status(200).json({ user })
        })
        .catch(error => res.status(401).json({ error: error.message }));
});

module.exports = router;