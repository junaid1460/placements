import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

// components
import { StudentComponent } from './student/student.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';

// services
import { WindowService } from './services/window.service';

import { env } from './app.env';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { modules } from './material.module';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    StudentComponent,
    LoginComponent,
    AuthComponent
  ],
  imports: [ BrowserModule,
    appRoutes,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(env.firebase, env.app.name),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ...modules
  ],
  providers: [WindowService],
  bootstrap: [AuthComponent]
})
export class AppModule { }
