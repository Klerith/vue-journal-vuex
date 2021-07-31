
import axios from 'axios'


const journalApi = axios.create({
    baseURL: 'https://vue-demos-be3d0-default-rtdb.firebaseio.com'
})

journalApi.interceptors.request.use( (config) => {

    config.params = {
        auth: localStorage.getItem('idToken')
    }

    return config
})


// console.log( process.env.NODE_ENV ) // TEST durante testing, 

export default journalApi


