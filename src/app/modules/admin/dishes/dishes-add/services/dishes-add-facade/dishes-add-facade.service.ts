import { inject, Injectable } from '@angular/core';
import { DocumentsService } from '../../../../../../core/firebase/documets/documents.service';
import { FireUpdateImgService } from '../../../../../../core/firebase/fire-update-img/fire-update-img.service';
import { Dishes } from '../../../../../../core/models';

@Injectable({
  providedIn: 'root'
})
export class DishesAddFacadeService {

  private ds = inject(DocumentsService);
  private fuis = inject(FireUpdateImgService);

  create(file: File | null | undefined, url: string, value: Dishes) {
    if (file) {
      this.fuis.getUrlImg(file, url).subscribe(res => {
        console.log('img', res);
      })
    }
  }


}
