import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroGuardPage } from './intro-guard.page';

const routes: Routes = [
  {
    path: '',
    component: IntroGuardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroGuardPageRoutingModule {}
