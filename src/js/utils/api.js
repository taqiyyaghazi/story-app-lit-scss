import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://story-api.dicoding.dev/v1',
});
