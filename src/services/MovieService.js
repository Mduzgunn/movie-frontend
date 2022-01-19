import axios from 'axios';

const PUBLISHER_API_BASE_URL = 'http://localhost:8082/v2/publisher';

class MovieService {

    getPublishers() {
        return axios.get(PUBLISHER_API_BASE_URL);
    }
}

export default new MovieService();