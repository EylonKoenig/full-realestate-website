import axios from 'axios';

const fecther = axios.create({
    baseURL: 'http://localhost:4000/',
    withCredentials: true,
});

export default fecther;