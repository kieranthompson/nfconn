import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserPage } from './userpage';

@NgModule({
  declarations: [
    UserPage,
  ],
  imports: [
    IonicPageModule.forChild(UserPage),
  ],
})
export class UserpagePageModule {}
