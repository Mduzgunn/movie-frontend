import axios from 'axios'

export default axios.create({
    baseURL: ("Access-Control-Allow-Origin", "http://localhost:8082/v2"),
    headers: {
        'Content-Type': 'application/json'
    }
})