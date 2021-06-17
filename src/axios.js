import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tinder-backend-raj.herokuapp.com'
})

export default instance ;