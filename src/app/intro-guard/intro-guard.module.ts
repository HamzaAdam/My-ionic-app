import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroGuardPageRoutingModule } from './intro-guard-routing.module';

import { IntroGuardPage } from './intro-guard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroGuardPageRoutingModule
  ],
  declarations: [IntroGuardPage]
})
export class IntroGuardPageModule {}
