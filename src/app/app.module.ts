import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HamburgerMenuComponent } from './components/hamburger-menu/hamburger-menu.component';
import { FullscreenSliderComponent } from './components/fullscreen-slider/fullscreen-slider.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { AnimationsService } from './services/animations.service';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingCartButtonComponent } from './components/shopping-cart/shopping-cart-button/shopping-cart-button.component';
import { ShoppingCartContentComponent } from './components/shopping-cart/shopping-cart-content/shopping-cart-content.component';
import { ShoppingCartSublayerComponent } from './components/shopping-cart/shopping-cart-sublayer/shopping-cart-sublayer.component';
import { HamburgerMenuButtonComponent } from './components/hamburger-menu/hamburger-menu-button/hamburger-menu-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HamburgerMenuComponent,
    FullscreenSliderComponent,
    ShopPageComponent,
    LandingPageComponent,
    ShoppingCartComponent,
    ShoppingCartButtonComponent,
    ShoppingCartContentComponent,
    ShoppingCartSublayerComponent,
    HamburgerMenuButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [AnimationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
