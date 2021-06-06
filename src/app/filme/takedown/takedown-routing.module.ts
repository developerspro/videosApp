import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TakedownPage } from './takedown.page';

const routes: Routes = [
  {
    path: '',
    component: TakedownPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TakedownPageRoutingModule {}
