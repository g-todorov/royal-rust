import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params} from '@angular/router';

import { ShoppingCartService } from '../services/shopping-cart.service';
import { ShoppingItemsService } from '../services/shopping-items.service';
import { AnimationsService } from '../services/animations.service';

@Component({
  selector: 'app-shop-item-page',
  templateUrl: './shop-item-page.component.html',
  styleUrls: ['./shop-item-page.component.styl']
})
export class ShopItemPageComponent implements OnInit, OnDestroy {
  currentShoppingItem: any = null;
  currentShoppingItemSize = '';
  urlShoppingItemId: number;

  constructor(
    private route: ActivatedRoute,
    private shoppingItemsService: ShoppingItemsService,
    private shoppingCartService: ShoppingCartService,
    private stateService: AnimationsService
  ) { }

  ngOnInit() {
    const routerSubscription = this.route.params.subscribe(params => {
      this.urlShoppingItemId = +params.id;
      this.getShoppingItems(params.id);
    });
  }

  addItemToShoppingCart({id, name, coverImage}): string {
    if (this.currentShoppingItemSize === '') {
      return 'error';
    }

    const cartShoppingItem = {
      'id': id,
      'name': name,
      'coverImage': coverImage,
      'size': this.currentShoppingItemSize
    };

    this.shoppingCartService.setShoppingCartItem(cartShoppingItem);
  }

  getShoppingItems(currentShoppingItemId): void {
    this.shoppingItemsService.requestShoppingItem(currentShoppingItemId);

    this.shoppingItemsService.shoppingItem.subscribe(shoppingItem => {
      if (shoppingItem !== null && this.urlShoppingItemId === shoppingItem.id) {
        this.stateService.changeSelectedItemName(shoppingItem.name);
        this.currentShoppingItem = shoppingItem;
      }
    });
  }

  onSizeClicked(event) {
    this.currentShoppingItemSize = event.target.innerText;
  }

  ngOnDestroy() {
    this.currentShoppingItem = null;
    this.urlShoppingItemId = -1;
    this.stateService.changeSelectedItemName('');
  }
}
