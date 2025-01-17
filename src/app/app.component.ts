import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TypeUser, User } from './core/models';

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
  ngOnInit(): void {
    this.store.select('user').subscribe(user => {
      this.type = user.type;
    })
  }
}
