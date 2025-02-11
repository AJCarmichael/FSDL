import axios from 'axios';

const API_URL = 'http://localhost:5000/api/poll';

export default {
  getPoll() {
    return axios.get(API_URL);
  },
  vote(optionIndex) {
    return axios.post(`${API_URL}/vote`, { optionIndex });
  }
};
