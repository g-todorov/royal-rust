import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params} from '@angular/router';

import { AppStateService } from '../../services/app-state.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { ShoppingItemsService } from '../../services/shopping-items.service';

import { pageLoadingState } from '../../animations/page-loading.state';


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

  constructor(
    private route: ActivatedRoute,
    private appStateService: AppStateService,
    private shoppingItemsService: ShoppingItemsService,
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
    const routerUrlSubscription = this.route.url.subscribe(params => {
      this.appStateService.changeSelectedMenuItemName(params[0].path);
    });

    this.appStateService.changeHamburgerMenuState.subscribe(state => {
      this.hamburgerMenuState = state;
    });

    this.appStateService.changeShoppingCartState.subscribe(state => {
      this.shoppingCartMenuState = state;
    });

    this.getShoppingItems();
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
