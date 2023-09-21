import axios from 'axios';
import queryString from 'query-string';
import { CarNameInterface, CarNameGetQueryInterface } from 'interfaces/car-name';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCarNames = async (query?: CarNameGetQueryInterface): Promise<PaginatedInterface<CarNameInterface>> => {
  const response = await axios.get('/api/car-names', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createCarName = async (carName: CarNameInterface) => {
  const response = await axios.post('/api/car-names', carName);
  return response.data;
};

export const updateCarNameById = async (id: string, carName: CarNameInterface) => {
  const response = await axios.put(`/api/car-names/${id}`, carName);
  return response.data;
};

export const getCarNameById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/car-names/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCarNameById = async (id: string) => {
  const response = await axios.delete(`/api/car-names/${id}`);
  return response.data;
};
