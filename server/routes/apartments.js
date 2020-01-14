var express = require('express');
var router = express.Router();
var { getAllapartments, getbyId, getLastFourApartment } = require('../db/apartments')

router.get('/', function(req, res, next) {
    getAllapartments(req.query)
        .then(apartments => res.status(200).json({ apartments }))
        .catch(error => res.status(500).json({ error: error.message }));
});

router.get('/:apartmentId', function(req, res, next) {
    getbyId(req.params.apartmentId)
        .then(customer => res.status(200).json(customer))
        .catch(error => res.status(500).json({ error: error.message }));
});
router.get('/four/bydate', function(req, res, next) {
    getLastFourApartment()
        .then(customer => res.status(200).json(customer))
        .catch(error => res.status(500).json({ error: error.message }));
});




module.exports = router;