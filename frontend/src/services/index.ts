import { api } from './../utils/api/api-instance';

export const register = async (data:{email: string, password:string}) => {
  const response: {id: string} = await api.post('/auth/register', data);
  return response
};

export const auth = async (data:{email: string, password:string}) => {
  const response = await api.post('/auth/signup', data);
  return response
};



