import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-iota-green.vercel.app/api', // Ganti dengan URL backend Anda
});

export default api;
