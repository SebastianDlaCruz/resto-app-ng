import { Dishes } from "./dishes.model";

export interface Dish {
  id: string;
  count: number;
  dishes: Dishes;
}

export interface Cart {
  id: string;
  idUser: string;
  dishes: Dish[];
  total: number;
}
