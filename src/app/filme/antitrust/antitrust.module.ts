import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AntitrustPageRoutingModule } from './antitrust-routing.module';

import { AntitrustPage } from './antitrust.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AntitrustPageRoutingModule
  ],
  declarations: [AntitrustPage]
})
export class AntitrustPageModule {}
