import { inject, Injectable } from '@angular/core';
import { getDownloadURL, ref, Storage, StorageReference, uploadBytes } from '@angular/fire/storage';
import { from, map, of, switchMap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FireUpdateImgService {

  private storage: Storage = inject(Storage);

  private upload(file: File, name: string) {
    const refImg = ref(this.storage, name + file.name);
    return from(uploadBytes(refImg, file));
  }

  private getUrlFromSnapshot(ref: StorageReference) {
    return from(getDownloadURL(ref)).pipe(
      map(url => url)
    )
  }

  getUrlImg(file: File | undefined | null, name: string) {

    if (file !== null && file !== undefined) {
      return this.upload(file, name).pipe(
        switchMap(snapshot => this.getUrlFromSnapshot(snapshot.ref))
      )
    }
    return throwError(() => of(null));
  }
}
