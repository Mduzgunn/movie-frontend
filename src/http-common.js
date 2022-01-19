import axios from 'axios'

export default axios.create({
    baseURL: "http://localhost:8082/v2",
    headers: {
        'Content-Type': 'application/json'
    }
})