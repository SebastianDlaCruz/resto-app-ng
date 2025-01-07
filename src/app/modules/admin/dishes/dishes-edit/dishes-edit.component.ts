import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ionImage } from '@ng-icons/ionicons';
import { switchMap } from 'rxjs';
import { DocumentsService } from '../../../../core/firebase/documets/documents.service';
import { FireUpdateImgService } from '../../../../core/firebase/fire-update-img/fire-update-img.service';
import { Category, Dishes } from '../../../../core/models';
import { FormDishesService } from '../../../../core/services/form-dishes/form-dishes.service';

@Component({
  selector: 'app-dishes-edit',
  templateUrl: './dishes-edit.component.html',
  styleUrl: './dishes-edit.component.css'
})
export class DishesEditComponent implements OnInit {

  @ViewChild('imgDish') imgDish?: ElementRef;

  private ds = inject(DocumentsService);
  private routers = inject(ActivatedRoute);
  private fuis = inject(FireUpdateImgService);
  private router = inject(Router);
  private id = this.routers.snapshot.params['id'];
  imgIcon = ionImage;
  img: string | ArrayBuffer | null | undefined = "";

  category: Category[] = [];
  state = false;
  form = inject(FormDishesService).getFormGroup();

  ngOnInit(): void {
    this.ds.getDocument('dishes', this.id).subscribe(data => {
      if (data.exists()) {
        const dish = data.data() as Dishes;
        Object.entries(dish).forEach(([key, value]) => {
          if (this.form.get(key)) {
            this.form.get(key)?.setValue(value);
          }

        })
      }

    });

    this.ds.getDocuments<Category[]>('category').subscribe(data => {
      this.category = data;
    });
  }

  updateImg(file: File) {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (this.imgDish) {
        this.imgDish.nativeElement.src = e.target?.result;
      }
    }

    reader.readAsDataURL(file);
  }

  onChange(input: HTMLInputElement) {
    if (input.files) {
      const file = input?.files[0];
      this.updateImg(file)
      this.form.get('imgFile')?.setValue(file as any);
    }
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

  onSubmit() {
    this.state = true;
    const url = this.createImgRoute('dishes');
    if (this.form.get('imgFile')?.value === null) {
      this.control('imgFile')?.disable();
      this.ds.setDocument('dishes', this.form.value).subscribe({
        next: (res) => {
          this.state = false;
          this.router.navigate(['admin/platos/lista']);
        }
      });
    } else {

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
        }
      })
    }

  }
}
