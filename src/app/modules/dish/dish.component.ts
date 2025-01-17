import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentsService } from '../../core/firebase/documets/documents.service';
import { Dishes } from '../../core/models';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrl: './dish.component.css'
})
export class DishComponent implements OnInit {
  private router = inject(ActivatedRoute);
  private id = this.router.snapshot.params['id'];
  private docs = inject(DocumentsService);
  dish?: Dishes;

  ngOnInit(): void {
    this.docs.getDocumentById<Dishes>(this.id, 'id', 'dishes').subscribe({
      next: (res) => {
        this.dish = res;
      }
    })
  }
}
