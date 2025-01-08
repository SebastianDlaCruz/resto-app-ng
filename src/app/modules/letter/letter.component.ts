import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DocumentsService } from '../../core/firebase/documets/documents.service';
import { Category } from '../../core/models';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrl: './letter.component.css'
})
export class LetterComponent implements OnInit, OnDestroy {

  private docs = inject(DocumentsService);
  private routes = inject(ActivatedRoute);
  category: Category[] = [];
  category$?: Subscription;

  ngOnInit(): void {
    this.category$ = this.docs.getDocuments<Category[]>('category').subscribe(data => {
      this.category = data;
    });
  }

  ngOnDestroy(): void {
    this.category$?.unsubscribe();
  }
}
