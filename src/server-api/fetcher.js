import axios from 'axios';

const fecther = axios.create({
    baseURL: 'https://eylonrealestate.herokuapp.com/',
    withCredentials: true,
});

export default fecther;