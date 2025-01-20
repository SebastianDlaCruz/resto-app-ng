import { inject, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private token$ = new BehaviorSubject<string>("");
  private cookie = inject(CookieService);

  setToken(token: string) {
    this.cookie.set('token', token);
    this.token$.next(token);
  }

  getToken() {

    const value = this.cookie.get('token');
    this.token$.next(value);

    return this.token$.asObservable();
  }

  clear() {
    this.token$.next("");
    this.cookie.delete('token');
  }

}
