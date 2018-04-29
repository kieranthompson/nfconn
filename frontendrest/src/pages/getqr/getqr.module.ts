import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetqrPage } from './getqr';

@NgModule({
  declarations: [
    GetqrPage,
  ],
  imports: [
    IonicPageModule.forChild(GetqrPage),
  ],
})
export class GetqrPageModule {}
