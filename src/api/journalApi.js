
import axios from 'axios'


const journalApi = axios.create({
    baseURL: 'https://vue-demos-be3d0-default-rtdb.firebaseio.com'
})


export default journalApi


