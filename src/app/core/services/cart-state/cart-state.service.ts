import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartStateService {

  private state$ = new BehaviorSubject(false);

  open() {
    this.state$.next(true);
  }

  close() {
    this.state$.next(false);
  }

  getState() {
    return this.state$.value
  }

}
