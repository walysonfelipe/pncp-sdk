const axios = require('axios');
const { BASE_URL } = require('../config.cjs');

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
});

module.exports = api;
