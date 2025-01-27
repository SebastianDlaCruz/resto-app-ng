import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { TypeUser, User } from './core/models';
import { initAuth } from './core/store/actions/user.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'resto-app';
  type?: TypeUser;
  typeUser = TypeUser;
  private store: Store<{ user: User }> = inject(Store);
  private cookie = inject(CookieService);

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    if (this.cookie.get('user')) {
      const user = JSON.parse(this.cookie.get('user'));
      if (user) {
        this.type = user.type;
        this.store.dispatch(initAuth({
          user
        }))
      }
    }
  }

}
