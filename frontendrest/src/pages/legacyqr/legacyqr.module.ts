import { NgxQRCodeModule } from 'ngx-qrcode2';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LegacyqrPage } from './legacyqr';

@NgModule({
  declarations: [
    LegacyqrPage,
  ],
  imports: [
    NgxQRCodeModule,
    IonicPageModule.forChild(LegacyqrPage),
  ],
  providers: [
    NgxQRCodeModule
  ]
})
export class LegacyqrPageModule {}
