import fecther from './fetcher';

const api = {
    async getApartments(query = "") {
        try {
            const data = await fecther.get(`/apartments${query}`);
            return data;
        }
        catch (error) {
            console.log(error);
        }
    },
    async login(userDetails) {
        try {
            const data = await fecther.post('/login',userDetails);
            return data;
        }
        catch (error) {
            console.log(error);
        }
    },
    async getAllCountries() {
        try {
            const data = await fecther.get('/countries');
            return data;
        }
        catch (error) {
            console.log(error);
        }
    },
    async getAllCitiesByCountry(country) {
        try {
            const data = await fecther.get(`/cities/${country}/all`);
            return data;
        }
        catch (error) {
            console.log(error);
        }
    }

}

export default api;