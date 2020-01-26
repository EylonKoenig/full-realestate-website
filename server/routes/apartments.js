var express = require('express');
var router = express.Router();
var {
    getAllapartments,
    getbyId,
    getLastFourApartment,
    getCountriesApartment,
    getCitiesApartment,
    postApartment,
    getAratmentbyUserId,
    deleteApartmentById,
    editApartment
} = require('../db/apartments')
var { addImages } = require('../db/images.js')
const { isUser } = require('../middlewares/authentication');

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
router.put('/', async function(req, res, next) {
    try {
        let data = req.body;
        let images = [];
        if (req.files) {
            if (req.files.main_image) {
                const fileName = await addPhoto(req.files.main_image);
                data.main_image = `images/apartment/${fileName}`;
            }
            if (req.files.images) {
                //for single image req.files.image is object or array if otherwise
                if (!req.files.images.length) req.files.images = [req.files.images]
                for (let image in req.files.images) {
                    const fileName = await addPhoto(req.files.images[image]);
                    images.push(`images/apartment/${fileName}`);
                    await addImages(req.body.id, images);
                }
            }
        } else {
            // add defult image
            data.main_image = `images/general/loadingApartment.jpg`;
        }
        await editApartment(data)
        res.end('apartemnt upload!');
    } catch (error) {
        console.log(error)
    }
});
router.get('/all/countries', function(req, res, next) {
    getCountriesApartment()
        .then(countries => res.status(200).json(countries))
        .catch(error => res.status(500).json({ error: error.message }));
});
router.get('/all/cities/:country', function(req, res, next) {
    getCitiesApartment(req.params.country)
        .then(cities => res.status(200).json(cities))
        .catch(error => res.status(500).json({ error: error.message }));
});
router.get('/four/bydate', function(req, res, next) {
    getLastFourApartment()
        .then(apartments => res.status(200).json(apartments))
        .catch(error => res.status(500).json({ error: error.message }));
});
// router.post('/upload', isUser, function(req, res, next) {
router.post('/upload', async function(req, res, next) {
    try {
        let data = req.body;
        let images = [];
        if (req.files) {
            if (req.files.main_image) {
                const fileName = await addPhoto(req.files.main_image);
                data.main_image = `images/apartment/${fileName}`;
            }
            if (req.files.images) {
                const apartmentId = await postApartment(data)
                    //for single image req.files.image is object or array if otherwise
                if (typeof(req.files.images) === "object") req.files.images = [req.files.images]
                for (let image in req.files.images) {
                    const fileName = await addPhoto(req.files.images[image]);
                    images.push(`images/apartment/${fileName}`);
                    await addImages(apartmentId, images);
                }
            }
        } else {
            // add defult image
            data.main_image = `images/general/loadingApartment.jpg`;
            await postApartment(data)
        }
        res.end('apartemnt upload!');
    } catch (error) {
        console.log(error)
    }
});
router.get('/user/:userId', function(req, res, next) {
    getAratmentbyUserId(req.params.userId)
        .then(apartment => res.status(200).json(apartment))
        .catch(error => res.status(500).json({ error: error.message }));
});
router.put('/remove/:apartmentId', function(req, res, next) {
    deleteApartmentById(req.params.apartmentId)
        .then(apartment => res.status(200).json(apartment))
        .catch(error => res.status(500).json({ error: error.message }));
});

const addPhoto = async function(file) {
    let date = new Date().getTime().toString();
    const name = date + file.name
    await file.mv(`${__dirname}/../public/images/apartment/${name}`)
    return name

}

module.exports = router;