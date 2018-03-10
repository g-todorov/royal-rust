import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HamburgerMenuComponent } from './components/hamburger-menu/hamburger-menu.component';
import { FullscreenSliderComponent } from './components/fullscreen-slider/fullscreen-slider.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AnimationsService } from './services/animations.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { ShoppingItemsService } from './services/shopping-items.service';
import { ApiService } from './api-service/api.service'
import { MessageService } from './api-service/message-service.service'
import { InMemoryDataService } from './api-service/in-memory-data.service'
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingCartButtonComponent } from './components/shopping-cart/shopping-cart-button/shopping-cart-button.component';
import { ShoppingCartContentComponent } from './components/shopping-cart/shopping-cart-content/shopping-cart-content.component';
import { ShoppingCartSublayerComponent } from './components/shopping-cart/shopping-cart-sublayer/shopping-cart-sublayer.component';
import { HamburgerMenuButtonComponent } from './components/hamburger-menu/hamburger-menu-button/hamburger-menu-button.component';
import { HamburgerMenuContentComponent } from './components/hamburger-menu/hamburger-menu-content/hamburger-menu-content.component';
import { HamburgerMenuSublayerComponent } from './components/hamburger-menu/hamburger-menu-sublayer/hamburger-menu-sublayer.component';
import { HamburgerMenuBreadcrumbComponent } from './components/hamburger-menu/hamburger-menu-breadcrumb/hamburger-menu-breadcrumb.component';
import { ShopItemPageComponent } from './shop-item-page/shop-item-page.component';

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
    HamburgerMenuButtonComponent,
    HamburgerMenuContentComponent,
    HamburgerMenuSublayerComponent,
    HamburgerMenuBreadcrumbComponent,
    ShopItemPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    AnimationsService,
    ShoppingCartService,
    ShoppingItemsService,
    ApiService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
