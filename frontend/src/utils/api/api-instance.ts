import axios from 'axios';
import * as Types from '@/types';
//import authHeader from './auth-header';

export const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL
});

const onError = ({ response, stack, message }: Types.ErrorAxios) => {
  console.log(response, stack, message);

};

api.interceptors.response.use(({ data }) => data, onError);

export default { api };
