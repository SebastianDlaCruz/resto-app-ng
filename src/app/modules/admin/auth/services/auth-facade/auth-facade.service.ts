import { inject, Injectable } from '@angular/core';
import { FirebaseError } from '@angular/fire/app';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { Subject, switchMap, takeUntil } from 'rxjs';
import { AuthService } from '../../../../../core/firebase/auth/auth.service';
import { FireUserService } from '../../../../../core/firebase/fire-user/fire-user.service';
import { User } from '../../../../../core/models';
import { AuthProperties } from '../../../../../core/models/auth.model';
import { update } from '../../../../../core/store/actions/user.action';

@Injectable({
  providedIn: 'root'
})
export class AuthFacadeService {

  private auth = inject(AuthService);
  private user = inject(FireUserService);
  private router = inject(Router);
  private destroy$ = new Subject<void>();
  private cookieService = inject(CookieService);

  constructor(private store: Store<{ user: User }>) { }

  logIn(data: AuthProperties) {
    this.auth.singIn(data).pipe(
      switchMap((res) => {
        return this.user.getUser(res.user.uid);
      }),
      takeUntil(this.destroy$)
    ).subscribe(
      {
        next: (res) => {
          this.cookieService.set('type', res.type);
          this.store.dispatch(update({
            user: res
          }));
          this.setToken();
        },
        error: (err) => {
          const error = err as FirebaseError;
          console.log(error);
        }
      })
  }

  setToken() {
    this.auth.getIdToken().subscribe(resToken => {
      if (resToken) {
        this.cookieService.set('token', resToken)
        this.router.navigate(['/admin/platos/lista'])
      }
    })
  }

  getDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
