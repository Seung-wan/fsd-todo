import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://api.domain.com/api',
});

export default httpClient;
