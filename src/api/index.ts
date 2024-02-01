import axios from 'axios'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const back = import.meta.env.VITE_APP_BACKEND

const api = axios.create({
    baseURL: `${back}/`,
    headers: {
        'Access-Control-Allow-Origin' : '*',
        "Access-Control-Allow-Credentials" : true,
        "Accept" : 'application/json',
        "Authorization" : localStorage.getItem('token')
    },

});

export default api