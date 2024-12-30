import { inject, Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, User, UserCredential } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
import { AuthProperties } from '../../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth: Auth = inject(Auth);

  singIn(data: AuthProperties): Observable<UserCredential> {
    return from(signInWithEmailAndPassword(this.auth, data.email, data.password));
  }

  /* createUserWithEmailAndPassword */

  getAuth(): User | null {
    return this.auth.currentUser;
  }

  singOut(): void {
    this.auth.signOut();
  }
}
