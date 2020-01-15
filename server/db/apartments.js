const connection = require('./config');
const Builder = require('./builders/apartmentsBuilder');

function getAllapartments({ apartmentId, property_type, city, country, minPrice, maxPrice, minRoom, maxRoom, minBath, maxBath, sale_status, page = 1, size = 12 }) {
    return new Promise((resolve, reject) => {
        try {
            const { query, params } = Builder.allApartments(page, size)
                .apartmentId(apartmentId)
                .property_type(property_type)
                .city(city)
                .country(country)
                .minPrice(minPrice)
                .maxPrice(maxPrice)
                .minRoom(minRoom)
                .maxRoom(maxRoom)
                .minBath(minBath)
                .maxBath(maxBath)
                .sale_status(sale_status)
                .build();
            connection.query(query, params, (error, results, fields) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(results);
            });
        } catch (error) {
            console.log(error);
        }
    });
}

function getbyId(apartmentId) {
    return new Promise((resolve, reject) => {
        connection.query(`Call getApartmentsByID(?)`, [apartmentId], (error, results, fields) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(results[0]);
        });
    });
}

function getLastFourApartment() {
    return new Promise((resolve, reject) => {
        connection.query(`call getApartmentsByCreateTime()`, (error, results, fields) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(results[0]);
        });
    });
}


module.exports = {
    getAllapartments,
    getbyId,
    getLastFourApartment

};