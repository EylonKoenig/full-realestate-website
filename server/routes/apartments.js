var express = require('express');
var router = express.Router();
var { getAllapartments, getbyId, getLastFourApartment, getCountriesApartment, getCitiesApartment } = require('../db/apartments')

router.get('/', function(req, res, next) {
    getAllapartments(req.query)
        .then(apartments => res.status(200).json({ apartments }))
        .catch(error => res.status(500).json({ error: error.message }));
});

router.get('/:apartmentId', function(req, res, next) {
    getbyId(req.params.apartmentId)
        .then(apartment => res.status(200).json(apartment))
        .catch(error => res.status(500).json({ error: error.message }));
});
router.get('/all/countries', function(req, res, next) {
    getCountriesApartment()
        .then(countries => res.status(200).json(countries))
        .catch(error => res.status(500).json({ error: error.message }));
});
router.get('/all/cities', function(req, res, next) {
    getCitiesApartment()
        .then(cities => res.status(200).json(cities))
        .catch(error => res.status(500).json({ error: error.message }));
});
router.get('/four/bydate', function(req, res, next) {
    getLastFourApartment()
        .then(customer => res.status(200).json(customer))
        .catch(error => res.status(500).json({ error: error.message }));
});




module.exports = router;