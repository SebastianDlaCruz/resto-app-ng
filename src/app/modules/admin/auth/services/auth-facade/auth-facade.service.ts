import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, switchMap, takeUntil } from 'rxjs';
import { AuthService } from '../../../../../core/firebase/auth/auth.service';
import { FireUserService } from '../../../../../core/firebase/fire-user/fire-user.service';
import { User } from '../../../../../core/models';
import { AuthProperties } from '../../../../../core/models/auth.model';
import { init } from '../../../../../core/store/actions/user.action';

@Injectable({
  providedIn: 'root'
})
export class AuthFacadeService {

  private auth = inject(AuthService);
  private user = inject(FireUserService);
  private destroy$ = new Subject<void>();

  constructor(private store: Store<{ user: User }>) { }


  logIn(data: AuthProperties) {

    this.auth.singIn(data).pipe(
      switchMap((res) => {
        return this.user.getUser(res.user.uid);
      }),
      takeUntil(this.destroy$)
    ).subscribe(res => {
      this.store.dispatch(init({
        user: res
      }))
    })
  }

  getDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
