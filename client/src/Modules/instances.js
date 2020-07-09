import axios from 'axios'
const server_url = 'http://localhost/partic/api'
const instance = axios.create({
    baseURL: server_url,
});

export default instance