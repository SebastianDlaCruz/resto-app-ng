import { Injectable } from '@angular/core';
import { Dishes } from '../../../../../core/models';

@Injectable({
  providedIn: 'root'
})
export class FilterDishesService {

  private dishes: Dishes[] = [];

  setDishes(dishes: Dishes[]) {
    this.dishes = dishes;
  }

  filterDishes(id: string) {

    const dishes = this.dishes.filter(dis => dis.category === id);

    return dishes;
  }
}
