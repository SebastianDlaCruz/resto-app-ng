import { Component, inject, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { DocumentsService } from '../../../../core/firebase/documets/documents.service';
import { Category, Dishes } from '../../../../core/models';
import { FilterDishesService } from './services/filter-dishes.service';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrl: './dishes-list.component.css'
})
export class DishesListComponent implements OnInit {

  private ds = inject(DocumentsService);
  private fds$ = inject(FilterDishesService);

  category: Category[] = [];
  dishes: Dishes[] = [];

  ngOnInit(): void {
    this.getDate();

  }

  getDate() {


    combineLatest([
      this.ds.getDocuments<Category[]>('category'),
      this.ds.getDocuments<Dishes[]>('dishes')
    ]).subscribe({
      next: ([category, dishes]) => {
        this.category = category;
        this.dishes = dishes;

        this.fds$.setDishes(dishes);
        this.dishes = this.fds$.filterDishes(category[0].id);
      },
      error([category, dishes]) {
        console.log(category, dishes)
      },

    })
  }


  onSelectDishes(event: Event) {
    const select = event.target as HTMLSelectElement
    this.dishes = this.fds$.filterDishes(select.value);

  }

}
