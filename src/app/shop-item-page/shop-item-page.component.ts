import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params} from '@angular/router';

import { ShoppingCartService } from '../services/shopping-cart.service';
import { ShoppingItemsService } from '../services/shopping-items.service';

@Component({
  selector: 'app-shop-item-page',
  templateUrl: './shop-item-page.component.html',
  styleUrls: ['./shop-item-page.component.styl']
})
export class ShopItemPageComponent implements OnInit, OnDestroy {
  currentShoppingItem: any = null;
  urlShoppingItemId: number;

  constructor(private route: ActivatedRoute,
    private shoppingItemsService: ShoppingItemsService, private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    const routerSubscription = this.route.params.subscribe(params => {
      this.urlShoppingItemId = +params.id;
      this.getShoppingItems(params.id);
    });
  }

  addItemToShoppingCart(item): void {
    this.shoppingCartService.setShoppingCartItem(item);
  }

  getShoppingItems(currentShoppingItemId): void {
    this.shoppingItemsService.requestShoppingItem(currentShoppingItemId);

    this.shoppingItemsService.shoppingItem.subscribe(shoppingItem => {
      if (shoppingItem !== null && this.urlShoppingItemId === shoppingItem.id) {
        this.currentShoppingItem = shoppingItem;
      }
    });
  }

  ngOnDestroy() {
    this.currentShoppingItem = null;
    this.urlShoppingItemId = -1;
  }
}
