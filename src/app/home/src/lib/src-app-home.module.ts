import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromHome from './+state/home.reducer';
import { HomeEffects } from './+state/home.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromHome.HOME_FEATURE_KEY, fromHome.homeReducer),
    EffectsModule.forFeature([HomeEffects]),
  ],
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
})
export class SrcAppHomeModule {}
