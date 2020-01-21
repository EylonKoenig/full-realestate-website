const connection = require('./config');

async function addImages(apartmentId, images) {
    for (let imageUrl in images) {
        try {
            await connection.query(`INSERT INTO \`realtor\`.\`images\` (\`apartment_id\`, \`url\`) VALUES ('${apartmentId}', '${images[imageUrl]}')`)
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = {
    addImages
};