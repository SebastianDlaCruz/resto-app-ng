import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentsService } from '../../../../core/firebase/documets/documents.service';
import { Dishes } from '../../../../core/models';

@Component({
  selector: 'app-view-dish',
  templateUrl: './view-dish.component.html',
  styleUrl: './view-dish.component.css'
})
export class ViewDishComponent implements OnInit {
  private routes = inject(ActivatedRoute);
  private docs = inject(DocumentsService);
  private id = this.routes.snapshot.params['id'];
  name = this.routes.snapshot.params['title'];
  dishes: Dishes[] = [];

  ngOnInit(): void {
    this.docs.getDocumentById<Dishes[]>(this.id, 'category').subscribe({
      next: (res) => {
        this.dishes = res;
      }
    })
  }

}
