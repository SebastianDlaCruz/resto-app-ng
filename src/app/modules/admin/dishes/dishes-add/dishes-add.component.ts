import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { DocumentsService } from '../../../../core/firebase/documets/documents.service';
import { FireUpdateImgService } from '../../../../core/firebase/fire-update-img/fire-update-img.service';
import { Category } from '../../../../core/models';
import { FormDishesService } from '../../../../core/services/form-dishes/form-dishes.service';
import { generateUUid } from '../../../../shared/utils/generate-uuid.util';

@Component({
  selector: 'app-dishes-add',
  templateUrl: './dishes-add.component.html',
  styleUrl: './dishes-add.component.css'
})
export class DishesAddComponent implements OnInit {

  private ds = inject(DocumentsService);
  private fuis = inject(FireUpdateImgService);
  private router = inject(Router);
  private fss = inject(FormDishesService);
  category: Category[] = [];
  state = false;

  form = inject(FormDishesService).getFormGroup();

  ngOnInit(): void {
    this.onChangePromotion();
    this.ds.getDocuments<Category[]>('category').subscribe(data => {
      this.category = data;
    });
  }

  onChangePromotion() {
    this.form.get('promotion')?.valueChanges.subscribe(promotion => {
      if (promotion) {
        this.form.get('discountAmount')?.enable();
      } else {
        this.form.get('discountAmount')?.disable();
      }
    });

  }



  control(name: string) {
    return this.form.get(name);
  }

  get fromCategory() {
    return this.form.get('category')?.value ?? '';
  }


  getIndexCategory() {
    const index = this.category.findIndex(item => item.id === this.fromCategory);
    return index;
  }


  createImgRoute(path: string) {
    return `${path}/${this.category[this.getIndexCategory()].name}/${this.control('name')?.value}` || '';
  }

  resetForm() {
    this.form.reset();
    this.form.markAsPristine();
    this.form.markAsUntouched();
  }

  onSubmit() {
    this.state = true;

    this.form.get('id')?.setValue(generateUUid());

    if (this.getIndexCategory() !== -1) {
      const url = this.createImgRoute('dishes');

      this.fuis.getUrlImg(this.form.get('imgFile')?.value, url).pipe(
        switchMap((url) => {
          this.control('imgFile')?.disable();
          this.control('img')?.setValue(url);
          return this.ds.setDocument('dishes', this.form.value);
        })
      ).subscribe({
        next: (res) => {
          this.state = false;
          this.router.navigate(['admin/platos/lista']);
        },
        error: (err) => {
          console.log(err);

        }
      })

    }

  }

}
