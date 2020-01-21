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
    async getApartmentById(apartmentId) {
        try {
            const data = await fecther.get(`http://localhost:5000/apartments/${apartmentId}`);
            return data;
        }
        catch (error) {
            console.log(error);
        }
    },
    async getRecentApartment() {
        try {
            const data = await fecther.get(`http://localhost:5000/apartments/four/bydate`);
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
    },
    async sendDataToServer(fromData) {
        try {
            const data = await fecther.post(`/apartments/upload`,fromData);
            return data;
        }
        catch (error) {
            console.log(error);
        }
    },
    async getUsers() {
        try {
            const data = await fecther.get(`/register`);
            return data;
        }
        catch (error) {
            console.log(error);
        }
    },
    async getRelevantCountries() {
        try {
            const data = await fecther.get(`/apartments/all/countries`);
            return data;
        }
        catch (error) {
            console.log(error);
        }
    },
    async getRelevantCities(query) {
        try {
            const data = await fecther.get(`http://localhost:5000/apartments/all/cities/${query}`);
            return data;
        }
        catch (error) {
            console.log(error);
        }
    },
    async addUser(user) {
        try {
            const data = await fecther.post(`/register`,user);
            return data;
        }
        catch (error) {
            console.log(error);
        }
    },
    


}

export default api;