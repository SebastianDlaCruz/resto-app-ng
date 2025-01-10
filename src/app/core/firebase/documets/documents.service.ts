import { inject, Injectable } from '@angular/core';
import { collection, deleteDoc, doc, Firestore, getDoc, getDocs, query, setDoc, where } from '@angular/fire/firestore';
import { from, map, Observable } from 'rxjs';
import { onSnapshotObserver } from '../../../shared/utils/onSnapshotObserver.util';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
  private firestore: Firestore = inject(Firestore);

  getDocuments<T>(name: string): Observable<T> {

    const q = query(collection(this.firestore, name));

    return onSnapshotObserver(q).pipe(
      map(query => query.docs.map(item => item.data()) as T)
    )
  }

  setDocument(name: string, data: any) {
    return from(setDoc(doc(this.firestore, name, data.id), data));
  }

  getDocument(name: string, id: string) {
    const docRef = doc(this.firestore, name, id);
    return from(getDoc(docRef))
  }


  getDocumentById<T>(id: string, name: string) {
    const q = query(collection(this.firestore, "dishes"), where(name, "==", id));

    return from(getDocs(q)).pipe(
      map(res => res.docs.map(item => item.data()) as T)
    )

  }

  delete(id: string, type: string) {
    return from(deleteDoc(doc(this.firestore, type, id)));
  }
}
