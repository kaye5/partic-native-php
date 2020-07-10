import axios from 'axios'
import Auth from './Auth';
const server_url = 'http://localhost/partic/api'
const instance = axios.create({
    baseURL: server_url,
});
if(Auth.isUserAuthenticated()){
    instance.defaults.headers.common['Authorization'] = 'Bearer '+ localStorage.getItem('user')
}
export default instance