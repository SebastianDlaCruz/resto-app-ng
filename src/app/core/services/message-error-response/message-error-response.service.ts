import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageErrorResponseService {
  private message$ = new BehaviorSubject<string>("");

  setCodeMessage(code: string) {

    switch (code) {
      case 'auth/user-not-found':
        this.message$.next('Email no valido')
        break;
    }
  }

  getMessage() {
    return this.message$.value;
  }
}
