import { TestBed } from '@angular/core/testing';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from './app.component';
import { cartStateReducer } from './core/store/reducers/cart-state.reducer';
import { cartReducer } from './core/store/reducers/cart.reducer';
import { userReducer } from './core/store/reducers/user.reducer';
import { ComponentsModule } from './shared/components/components.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule,
        StoreModule.forRoot({ user: userReducer, cart: cartReducer, cartState: cartStateReducer }),
        ComponentsModule
      ],
      providers: [
        CookieService,
        provideFirebaseApp(() => initializeApp({
          apiKey: "AIzaSyAWgLlVvKuTWC56NYBC4RqdUH9O2wUtZSY",
          authDomain: "appresetas-3a157.firebaseapp.com",
          projectId: "appresetas-3a157",
          storageBucket: "appresetas-3a157.appspot.com",
          messagingSenderId: "772065552180",
          appId: "1:772065552180:web:2edde1e76dde6270dc2761",
          measurementId: "G-4SEECFG5FR"
        })),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        provideStorage(() => getStorage()),

      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    jasmine.createSpyObj('getUser', app.getUser);

    app.ngOnInit();

    expect(app.getUser).toHaveBeenCalled();
    expect(app).toBeTruthy();

  });


});
