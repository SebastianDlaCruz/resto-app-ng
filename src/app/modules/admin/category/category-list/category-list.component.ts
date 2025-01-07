import { Component, inject, OnInit } from '@angular/core';
import { DocumentsService } from '../../../../core/firebase/documets/documents.service';
import { Category } from '../../../../core/models';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {
  private ds = inject(DocumentsService);
  category: Category[] = [];

  ngOnInit(): void {
    this.ds.getDocuments<Category[]>('category').subscribe(data => {
      this.category = data;
    });
  }
}
