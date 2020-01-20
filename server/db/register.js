const crypto = require('crypto');
const connection = require('./config');
const convertData = require('./setData')

function getUser() {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT users.email FROM users `, (error, results, fields) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(convertData(results));
        });
    });
}



module.exports = {
    getUser
};