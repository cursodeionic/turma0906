import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserPage } from './user';

@NgModule({
  declarations: [
    UserPage,
    LoginPage,
    SignupPage
  ],
  imports: [
    IonicPageModule.forChild(UserPage),
  ],
  entryComponents: [
    UserPage,
    LoginPage,
    SignupPage
  ]
})
export class UserPageModule {}
