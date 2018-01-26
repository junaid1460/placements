import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

// components
// import { StudentComponent } from './student/student.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';

// modules
import { StudentModule } from './student/student.module';

// services
import { WindowService } from './services/window.service';

import { env } from './app.env';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { modules } from './material.module';
import { appRoutes } from './app.routes';


document.title = env.app.name;

@NgModule({
  declarations: [
    // StudentComponent,
    LoginComponent,
    AuthComponent,
  ],
  imports: [ BrowserModule,
    FormsModule,
    appRoutes,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(env.firebase, env.app.name),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ...modules,
    StudentModule,
  ],
  providers: [WindowService],
  bootstrap: [AuthComponent],
  // entryComponents: [StudentModule]
})
export class AppModule { }
