import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HamburgerMenuComponent } from './components/hamburger-menu/hamburger-menu.component'
import { FullscreenSliderComponent } from './components/fullscreen-slider/fullscreen-slider.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component'


@NgModule({
  declarations: [
    AppComponent,
    HamburgerMenuComponent,
    FullscreenSliderComponent,
    ShopPageComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
