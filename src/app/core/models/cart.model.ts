import { Dishes } from "./dishes.model";

export interface Cart {
  idUser: string;
  dishes: Dishes[];
}
