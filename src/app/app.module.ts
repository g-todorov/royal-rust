import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HamburgerMenuComponent } from './components/hamburger-menu/hamburger-menu.component';
import { FullscreenSliderComponent } from './components/fullscreen-slider/fullscreen-slider.component';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppStateService } from './services/app-state.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { ShoppingItemsService } from './services/shopping-items.service';
import { LocalStorageService } from './services/local-storage.service';
import { ApiService } from './api-service/api.service';
import { MessageService } from './api-service/message-service.service';
import { InMemoryDataService } from './api-service/in-memory-data.service';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingCartButtonComponent } from './components/shopping-cart/shopping-cart-button/shopping-cart-button.component';
import { ShoppingCartContentComponent } from './components/shopping-cart/shopping-cart-content/shopping-cart-content.component';
import { ShoppingCartSublayerComponent } from './components/shopping-cart/shopping-cart-sublayer/shopping-cart-sublayer.component';
import { HamburgerMenuButtonComponent } from './components/hamburger-menu/hamburger-menu-button/hamburger-menu-button.component';
import { HamburgerMenuContentComponent } from './components/hamburger-menu/hamburger-menu-content/hamburger-menu-content.component';
import { HamburgerMenuSublayerComponent } from './components/hamburger-menu/hamburger-menu-sublayer/hamburger-menu-sublayer.component';
import { BreadcrumbMenuComponent } from './components/breadcrumb-menu/breadcrumb-menu.component';
import { ShopItemPageComponent } from './pages/shop-item-page/shop-item-page.component';
import { VideosPageComponent } from './pages/videos-page/videos-page.component';
import { DropdownComponent } from './shared-components/dropdown/dropdown.component';
import { QuantityCounterComponent } from './shared-components/counter/quantity-counter.component';
import { ScrollEventDirective } from './directives/scroll-event.directive';

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
    BreadcrumbMenuComponent,
    ShopItemPageComponent,
    VideosPageComponent,
    DropdownComponent,
    QuantityCounterComponent,
    ScrollEventDirective
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
    AppStateService,
    ShoppingCartService,
    ShoppingItemsService,
    ApiService,
    LocalStorageService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
