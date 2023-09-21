import { CarNameInterface } from 'interfaces/car-name';
import { GetQueryInterface } from 'interfaces';

export interface LocationInterface {
  id?: string;
  latitude: string;
  longitude: string;
  address?: string;
  city?: string;
  country?: string;
  car_id: string;
  created_at?: any;
  updated_at?: any;

  car_name?: CarNameInterface;
  _count?: {};
}

export interface LocationGetQueryInterface extends GetQueryInterface {
  id?: string;
  latitude?: string;
  longitude?: string;
  address?: string;
  city?: string;
  country?: string;
  car_id?: string;
}
