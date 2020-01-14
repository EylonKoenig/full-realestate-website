var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    connection.query('SELECT * FROM  apartments ', function(error, results, fields) {
        if (error) throw error;
        console.log(results);
        res.send(results);
    });
});

module.exports = router;