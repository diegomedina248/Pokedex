/* eslint-disable no-console */

import axios from 'axios';
import humps from 'humps';

import { API_URL } from 'react-native-dotenv';

const client = axios.create({
  baseURL: API_URL,
  timeout: 100000,
  headers: { 'content-type': 'application/json' },
  transformResponse: [
    ...axios.defaults.transformResponse,
    data => humps.camelizeKeys(data),
  ],
  transformRequest: [
    data => humps.decamelizeKeys(data),
    ...axios.defaults.transformRequest,
  ],
});

client.interceptors.request.use(config => config, (error) => {
  console.log('Failed to make request with error:');
  console.log(error);
  return Promise.reject(error);
});

client.interceptors.response.use(response => response, (error) => {
  console.log('Request got response with error:');
  console.log(error);
  return Promise.reject(error);
});

export default client;
