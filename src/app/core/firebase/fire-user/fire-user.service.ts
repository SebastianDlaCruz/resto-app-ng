import { inject, Injectable } from '@angular/core';
import { collection, Firestore, query, where } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';
import { onSnapshotObserver } from '../../../shared/utils/onSnapshotObserver.util';
import { User } from '../../models';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FireUserService {

  private auth = inject(AuthService);
  private firestore = inject(Firestore);


  getUser(id: string): Observable<User> {

    const q = query(collection(this.firestore, 'users'), where('idToken', '==', id));

    return onSnapshotObserver(q).pipe(
      map(query => query.docs[0].data() as User)
    )
  }
}
