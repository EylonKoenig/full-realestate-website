var express = require('express');
var router = express.Router();
var connection = require('../db/config')

var convertPassword = require('../db/builders/crypto');
var setQuery = require('../db/builders/setUpdateQuery')

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
router.post('/get/password', function(req, res, next) {
    const password = convertPassword(req.body.password)
    res.send(password);
});
router.post('/edit_user', function(req, res, next) {
    const insertQuery = setQuery("users", req.body)
    connection.query(insertQuery, function(error, results, fields) {
        if (error) throw error;
        res.send(results[0]);

    });
});



module.exports = router;