import axios from 'axios';

const fecther = axios.create({
    baseURL: 'http://shielded-savannah-89374.herokuapp.com/',
    withCredentials: true,
});

export default fecther;