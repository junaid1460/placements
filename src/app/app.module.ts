import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { env } from './app.env';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { modules } from './material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ BrowserModule,
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
