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
    }
}

export default api;