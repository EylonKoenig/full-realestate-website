var express = require('express');
var router = express.Router();
var {
    getAllapartments,
    getbyId,
    getLastFourApartment,
    getCountriesApartment,
    getCitiesApartment,
    postApartment
} = require('../db/apartments')

const { isUser } = require('../middlewares/authentication');

router.get('/', function(req, res, next) {
    console.log('cookies', req.cookies);
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
router.get('/all/cities/:country', function(req, res, next) {
    console.log(req.params.country)
    getCitiesApartment(req.params.country)
        .then(cities => res.status(200).json(cities))
        .catch(error => res.status(500).json({ error: error.message }));
});
router.get('/four/bydate', function(req, res, next) {
    getLastFourApartment()
        .then(apartments => res.status(200).json(apartments))
        .catch(error => res.status(500).json({ error: error.message }));
});
router.post('/upload', isUser, function(req, res, next) {
    if (req.files === null) {
        return res.status(400).json({ msg: 'no file uploaded' });
    }
    const file = req.files.file;
    const dir = "C:/Users/eylon/Desktop/realtour"
    console.log(dir + '/server/public/images/apartment/' + file.name)
    file.mv(`${dir}/server/public/images/apartment/${file.name}`, err => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        }
        res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    });

});


module.exports = router;