import http from '../http-common'

class CustomerDataService {
    getAll() {
        return http.get('/publisher')
    }

    get(id) {
        return http.get(`/publisher/${id}`)
    }

    create(data) {
        return http.post('/publisher', data)
    }

}

export default new CustomerDataService()