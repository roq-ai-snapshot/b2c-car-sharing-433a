import { UserInterface } from 'interfaces/user';
import { CarNameInterface } from 'interfaces/car-name';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  start_time: any;
  end_time?: any;
  status?: string;
  user_id: string;
  car_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  car_name?: CarNameInterface;
  _count?: {};
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  user_id?: string;
  car_id?: string;
}
