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
    this.token$.next(token);
  }

  getToken() {
    return this.token$.value;
  }
}
