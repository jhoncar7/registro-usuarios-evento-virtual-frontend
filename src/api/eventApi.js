import axios from "axios";

const baseURL = 'https://evento-virtual.herokuapp.com/api';

const eventApi = axios.create({ baseURL });

eventApi.interceptors.request.use(async (config) => {
    return config;
}, (error) => {
    console.log(error);
})

export default eventApi;