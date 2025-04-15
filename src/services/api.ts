import { AppError } from '@utils/AppError';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.5:3333',
  timeout: 6000, // quantidade de tempo em milissegundos
});

api.interceptors.response.use(Response => Response, error => {
  if(error.response && error.response.data){
    return Promise.reject(new AppError(error.response.data.message));
  } else {
    return Promise.reject(error);
  }
});

  

export { api };