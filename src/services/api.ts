import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://10.19.92.45:4000'
})