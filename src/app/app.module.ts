import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

// components
import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';

import { env } from './app.env';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { modules } from './material.module';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [ BrowserModule,
    appRoutes,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(env.firebase, env.app.name),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ...modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
