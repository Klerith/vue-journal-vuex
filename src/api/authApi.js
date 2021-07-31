
import axios from 'axios'


const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyBhCquFEBH1rgR5IJFo1v1qGiZzHDe2PVI'
    }
})

// console.log( process.env.NODE_ENV ) // TEST durante testing, 

export default authApi


