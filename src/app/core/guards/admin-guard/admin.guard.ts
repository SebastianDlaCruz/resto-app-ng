import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { User } from '../../models';


export const adminGuard: CanActivateFn = (route, state) => {

  const rol = route.data['roles'];
  const router = inject(Router);

  const store = inject(Store) as Store<{ user: User }>;

  return store.select('user').pipe(
    map(userState => {
      if (userState.type === rol) {
        return true;
      } else {
        return false;
        router.createUrlTree(['/admin/login']);
      }
    })
  )


};
