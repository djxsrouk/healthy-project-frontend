import axios from 'axios';

const API_PRODUCTS = axios.create({
  baseURL: 'http://localhost:3000/api/products',
});

export default API_PRODUCTS;
