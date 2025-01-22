import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { User } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private user: Store<{ user: User }> = inject(Store);


  getDataUser() {
    return this.user.select('user').pipe(
      map(user => user)
    )
  }

  getName() {
    return this.user.select('user').pipe(
      map(user => user.userName)
    )
  }

}
