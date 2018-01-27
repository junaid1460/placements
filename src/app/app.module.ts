import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

// components
import { CompanyComponent } from './student/company/company.component';
import { NewsComponent } from './student/news/news.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';

// dialogs
import { CompanyRegistrationDialog } from './student/company/company.registration.dialog';


// services
import { WindowService } from './services/window.service';
import { AuthService } from './services/auth.service';
import { DBService } from './services/db.service';

// pipes

import { KeyValPipe } from './pipes/key.pipe';

import { env } from './app.env';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { modules } from './material.module';
import { appRoutes } from './app.routes';


document.title = env.app.name;

@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent,
    KeyValPipe,
    NewsComponent,
    CompanyComponent,
    CompanyRegistrationDialog
  ],
  imports: [ BrowserModule,
    FormsModule,
    appRoutes,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(env.firebase, env.app.name),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ...modules,
    // StudentModule,
  ],
  providers: [WindowService, AuthService, DBService],
  bootstrap: [AuthComponent],
  entryComponents: [CompanyRegistrationDialog]
})
export class AppModule { }
