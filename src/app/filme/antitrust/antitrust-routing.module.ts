import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AntitrustPage } from './antitrust.page';

const routes: Routes = [
  {
    path: '',
    component: AntitrustPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AntitrustPageRoutingModule {}
