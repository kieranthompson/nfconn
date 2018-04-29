import { NgxQRCodeModule } from 'ngx-qrcode2';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserPage } from './userpage';

@NgModule({
  declarations: [
    UserPage,
  ],
  imports: [
    NgxQRCodeModule,
    IonicPageModule.forChild(UserPage),
  ],
})
export class UserpagePageModule {}
