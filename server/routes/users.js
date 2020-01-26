var express = require('express');
var router = express.Router();
var connection = require('../db/config')
router.get('/', function(req, res, next) {
    connection.query('CALL getApartmentsByCreateTime()', function(error, results, fields) {
        if (error) throw error;
        res.send(results[0]);

    });
});
router.get('/:userId', function(req, res, next) {
    connection.query(`SELECT * FROM users WHERE id = ${req.params.userId}`, function(error, results, fields) {
        if (error) throw error;
        res.send(results[0]);

    });
});


module.exports = router;