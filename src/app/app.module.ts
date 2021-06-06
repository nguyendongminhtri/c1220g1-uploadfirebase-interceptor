import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {
  FontAwesomeModule,
  FaIconLibrary
} from '@fortawesome/angular-fontawesome';

import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';

import { HomeComponent } from './pages/home/home.component';
import { GettingStartedComponent } from './pages/gettingstarted/gettingstarted.component';

import { HttpClientModule } from '@angular/common/http';
import { NgxAudioPlayerModule } from 'projects/ngx-audio-player/src/public_api';
import { MatButtonModule } from '@angular/material/button';

import {NavBarModule} from './shared/navbar';
import {FooterModule} from './shared/footer';
import { RegisterComponent } from './form-login/register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './form-login/login/login.component';
import { UserAccountComponent } from './form-login/user-account/user-account.component';
import {httpInterceptorProviders} from './service/auth.interceptor';
import { UploadAvatarComponent } from './upload/upload-avatar/upload-avatar.component';
import { UploadFileComponent } from './upload/upload-file/upload-file.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment.prod';
import { CreateSongComponent } from './component/songManage/create-song/create-song.component';
import { PageSongComponent } from './component/songManage/page-song/page-song.component';
import {MatPaginatorModule} from '@angular/material/paginator';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  { path: 'register', component: RegisterComponent, data: {title: 'Register'}},
  { path: 'login', component: LoginComponent, data: {title: 'Login'}},
  { path: 'user-account', component: UserAccountComponent, data: {title: 'UserAccount'}},
  { path: 'create-song', component: CreateSongComponent, data: {title: 'CreateSong'}},
  { path: 'page-song', component: PageSongComponent, data: {title: 'PageSong'}},
  {
    path: 'guide/getting-started',
    component: GettingStartedComponent,
    data: { title: 'Getting Started' }
  }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, GettingStartedComponent, RegisterComponent, LoginComponent, UserAccountComponent, UploadAvatarComponent, UploadFileComponent, CreateSongComponent, PageSongComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    FontAwesomeModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NavBarModule, FooterModule,
    NgxAudioPlayerModule,
    FormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),

    RouterModule.forRoot(appRoutes, {useHash: false}), MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatProgressBarModule, MatPaginatorModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faFacebookF, faTwitter, faLinkedinIn);
  }
}
