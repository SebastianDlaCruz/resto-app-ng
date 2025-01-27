import { Dishes } from "./dishes.model";

export interface Dish {
  id: string;
  count: number;
  dishes: Dishes;
}

export enum PaidStatus {
  PAY = 'pay',
  PENDING = 'pending'
}

export interface Cart {
  id: string;
  idUser: string;
  dishes: Dish[];
  total: number;
  items: number;
  state: PaidStatus

}

