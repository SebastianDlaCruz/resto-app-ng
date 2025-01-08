import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, User, UserCredential } from '@angular/fire/auth';
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

  create(data: AuthProperties) {
    return from(
      createUserWithEmailAndPassword(this.auth, data.email, data.password)
    );
  }

  getAuth(): User | null {
    return this.auth.currentUser;
  }

  getIdToken() {
    return from(this.auth.currentUser?.getIdToken() ?? Promise.resolve(null));
  }

  singOut(): void {
    this.auth.signOut();
  }
}
