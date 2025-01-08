import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { DocumentsService } from '../../../../core/firebase/documets/documents.service';
import { FireUpdateImgService } from '../../../../core/firebase/fire-update-img/fire-update-img.service';
import { Category } from '../../../../core/models';
import { FormCategoryService } from '../../../../core/services/form-category/form-category.service';
import { generateUUid } from '../../../../shared/utils/generate-uuid.util';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrl: './category-add.component.css'
})
export class CategoryAddComponent implements OnInit {

  state = false;
  private ds = inject(DocumentsService);
  private fuis = inject(FireUpdateImgService);
  private router = inject(Router);

  category: Category[] = [];
  form = inject(FormCategoryService).getFormGroup();

  ngOnInit(): void {
    this.ds.getDocuments<Category[]>('category').subscribe(data => {
      this.category = data;
    });
  }

  control(name: string) {
    return this.form.get(name);
  }

  onSubmit() {
    this.state = true;
    this.form.get('id')?.setValue(generateUUid());
    this.fuis.getUrlImg(this.control('imgFile')?.value, `category/${this.control('name')?.value}`).pipe(
      switchMap(res => {
        this.control('imgFile')?.disable();
        this.control('img')?.setValue(res);
        return this.ds.setDocument('category', this.form.value);
      })
    ).subscribe({
      next: (res) => {
        this.state = true;
        this.router.navigate(['admin/categorias/lista'])
      }
    })
  }

}
