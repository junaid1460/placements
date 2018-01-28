import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'hammerjs';

import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

// components
import { CompanyComponent } from './student/company/company.component';
import { NewsComponent } from './student/news/news.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';
import { MobileComponent} from './auth/mobile/mobile.component';
import { DeskComponent } from './auth/desk/desk.component';
import { AdminComponent } from './admin/main/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { HelpComponent } from './help/help.component';
import { AboutComponent } from './about/about.component';
import { SidebarComponent } from './auth/sidebar/sidebar.component';
import { AppComponent } from './app/app.component';

// dialogs
import { CompanyRegistrationDialog } from './student/company/company.registration.dialog';


// services
import { WindowService } from './services/window.service';
import { AuthService } from './services/auth.service';
import { DBService } from './services/db.service';
import { AuthGuard } from './services/auth.guard';

// pipes

import { KeyValPipe } from './pipes/key.pipe';

import { env } from './app.env';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { modules } from './material.module';
import { appRoutes } from './app.routes';


document.title = env.app.name;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthComponent,
    KeyValPipe,
    NewsComponent,
    CompanyComponent,
    CompanyRegistrationDialog,
    AdminComponent,
    MobileComponent,
    DeskComponent,
    ProfileComponent,
    AboutComponent,
    HelpComponent,
    SettingsComponent,
    SidebarComponent,
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
  providers: [WindowService, AuthService, DBService, AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [CompanyRegistrationDialog]
})
export class AppModule { }
