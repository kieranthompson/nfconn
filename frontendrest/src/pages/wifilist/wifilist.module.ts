import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WifilistPage } from './wifilist';

@NgModule({
  declarations: [
    WifilistPage,
  ],
  imports: [
    IonicPageModule.forChild(WifilistPage),
  ],
})
export class WifilistPageModule {}
