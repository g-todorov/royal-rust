import { Component, OnInit, OnDestroy } from '@angular/core';

import { AnimationsService } from '../services/animations.service';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { ShoppingItemsService } from '../services/shopping-items.service';

import { pageLoadingState } from '../animations/page-loading.state';


@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.styl'],
  animations: [pageLoadingState]
})
export class ShopPageComponent implements OnInit, OnDestroy {
  hamburgerMenuState = 'closed';
  shoppingCartMenuState = 'closed';
  shoppingItems: [any];

  constructor(private animtionService: AnimationsService,
    private shoppingItemsService: ShoppingItemsService, private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.animtionService.changeHamburgerMenuState.subscribe(state => {
      this.hamburgerMenuState = state;
    });

    this.animtionService.changeShoppingCartState.subscribe(state => {
      this.shoppingCartMenuState = state;
    });

    this.getShoppingItems();
  }

  addItemToShoppingCart(item): void {
    this.shoppingCartService.setShoppingCartItem(item);
  }

  getShoppingItems(): void {
    this.shoppingItemsService.requestShoppingItems();

    this.shoppingItemsService.shoppingItems.subscribe(shoppingItems => {
      this.shoppingItems = shoppingItems;
    });
  }

  getPageState(): string {
    if (this.shoppingCartMenuState === 'closed' && this.hamburgerMenuState === 'closed') {
      return 'opened';
    } else {
      return 'closed';
    }
  }

  ngOnDestroy() {
    // ...
  }
}
