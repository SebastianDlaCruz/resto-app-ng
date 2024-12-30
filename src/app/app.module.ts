import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { userReducer } from './core/store/reducers/user.reducer';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ user: userReducer }),
  ],
  providers: [
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

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
