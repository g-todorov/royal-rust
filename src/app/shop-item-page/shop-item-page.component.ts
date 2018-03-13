import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import { ShoppingCartService } from '../services/shopping-cart.service';
import { ShoppingItemsService } from '../services/shopping-items.service';

@Component({
  selector: 'app-shop-item-page',
  templateUrl: './shop-item-page.component.html',
  styleUrls: ['./shop-item-page.component.styl']
})
export class ShopItemPageComponent implements OnInit, OnDestroy {
  currentShoppingItem: any = null;
  urlShoppingItemName = '';

  constructor(private route: ActivatedRoute,
    private shoppingItemsService: ShoppingItemsService, private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    const routerSubscription = this.route.params.subscribe(params => {
      this.urlShoppingItemName = params.name;
      this.getShoppingItems(params.name);
    });
  }

  addItemToShoppingCart(item): void {
    this.shoppingCartService.setShoppingCartItem(item);
  }

  getShoppingItems(currentShoppingItemName): void {
    this.shoppingItemsService.requestShoppingItems(currentShoppingItemName);

    this.shoppingItemsService.shoppingItem.subscribe(shoppingItem => {
      if (shoppingItem !== null && this.urlShoppingItemName === shoppingItem.name) {
        this.currentShoppingItem = shoppingItem;
      }
    });
  }

  ngOnDestroy() {
    this.currentShoppingItem = null;
    this.urlShoppingItemName = '';
  }
}
