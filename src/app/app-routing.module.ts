import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { ItemDetailsComponent } from './item-details/item-details.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

// import { ItemsService } from './items.service';

const appRoutes: Routes = [
  { path: '', component: LandingPageComponent, data: { state: 'landing' }},
  { path: ':shop', component: ShopPageComponent, data: { state: 'shop' }}
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}