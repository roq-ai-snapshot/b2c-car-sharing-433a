import { UserInterface } from 'interfaces/user';
import { CarNameInterface } from 'interfaces/car-name';
import { GetQueryInterface } from 'interfaces';

export interface OperationInterface {
  id?: string;
  type: string;
  status?: string;
  start_time: any;
  end_time?: any;
  user_id: string;
  car_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  car_name?: CarNameInterface;
  _count?: {};
}

export interface OperationGetQueryInterface extends GetQueryInterface {
  id?: string;
  type?: string;
  status?: string;
  user_id?: string;
  car_id?: string;
}
