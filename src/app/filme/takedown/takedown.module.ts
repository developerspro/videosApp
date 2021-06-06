import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TakedownPageRoutingModule } from './takedown-routing.module';

import { TakedownPage } from './takedown.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TakedownPageRoutingModule
  ],
  declarations: [TakedownPage]
})
export class TakedownPageModule {}
