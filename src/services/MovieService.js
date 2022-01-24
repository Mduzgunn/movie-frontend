import http from '../http-common'

class MovieService {
    getAll() {
        return http.get('/publisher')
    }

    get(id) {
        return http.get(`/publisher/${id}`)
    }

    create(data) {
        return http.post('/publisher', data)
    }

    update(id, data) {
        return http.put(`/publisher/${id}`, data)
    }

    delete(id) {
        return http.delete(`/publisher/${id}`)
    }

    //-----------------Director---------------------//

    getAllDirector() {
        return http.get('/director')
    }

    getDirector(id) {
        return http.get(`/director/${id}`)
    }

    createDirector(data) {
        return http.post('/director', data)
    }


    deleteDirector(id) {
        return http.delete(`/director/${id}`)
    }

    //-----------------Movie---------------------//



    getAllMovie() {
        return http.get('/movie')
    }

    getMovie(id) {
        return http.get(`/movie/${id}`)
    }

    createMovie(data) {
        return http.post('/movie', data)
    }

    updateMovie(id, data) {
        return http.put(`/movie/${id}`, data)
    }

    deleteMovie(id) {
        return http.delete(`/movie/${id}`)
    }

    //-----------------Actor---------------------//

    getAllActor() {
        return http.get('/actor')
    }

    getActor(id) {
        return http.get(`/actor/${id}`)
    }

    createActor(data) {
        return http.post('/actor', data)
    }

    updateActor(id, data) {
        return http.put(`/actor/${id}`, data)
    }

    deleteActor(id) {
        return http.delete(`/actor/${id}`)
    }
}

export default new MovieService()