import { Component, OnInit, OnDestroy, AfterViewInit, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { ShoppingCartService } from '../../services/shopping-cart.service';
import { ShoppingItemsService } from '../../services/shopping-items.service';
import { AppStateService } from '../../services/app-state.service';

@Component({
  selector: 'app-shop-item-page',
  templateUrl: './shop-item-page.component.html',
  styleUrls: ['./shop-item-page.component.styl']
})
export class ShopItemPageComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChildren('image') images: QueryList<any>;

  imageRefs: ElementRef[] = [];

  currentShoppingItem: any = null;
  currentShoppingItemAvaiableSizes;
  currentShoppingItemSize = '';
  currentShoppingItemSizeError = '';
  urlShoppingItemId: number;

  constructor(
    private route: ActivatedRoute,
    private shoppingItemsService: ShoppingItemsService,
    private shoppingCartService: ShoppingCartService,
    private appStateService: AppStateService
  ) { }

  ngOnInit() {
    const routerUrlSubscription = this.route.url.subscribe(params => {
      this.appStateService.changeSelectedMenuItemName(params[0].path);
    });

    const routerSubscription = this.route.params.subscribe(params => {
      this.urlShoppingItemId = +params.id;
      this.getShoppingItems(params.id);
    });
  }

  ngAfterViewInit() {
    // debugger
    // this.images.changes.subscribe((images) => {
    //   this.imageRefs = images.toArray();
    //   debugger
    // });
  }

  addItemToShoppingCart({id, name, coverImage, price}): string {
    if (this.currentShoppingItemSize === '') {
      this.currentShoppingItemSizeError = 'Size should be selected';
      return;
    }

    const cartShoppingItem = {
      'id': id,
      'name': name,
      'coverImage': coverImage,
      'price': price,
      'size': this.currentShoppingItemSize
    };

    this.shoppingCartService.setShoppingCartItem(cartShoppingItem);
  }

  getShoppingItems(currentShoppingItemId): void {
    this.shoppingItemsService.requestShoppingItem(currentShoppingItemId);

    this.shoppingItemsService.shoppingItem.subscribe(shoppingItem => {
      if (shoppingItem !== null && this.urlShoppingItemId === shoppingItem.id) {
        this.appStateService.changeSelectedItemName(shoppingItem.name);
        this.currentShoppingItemAvaiableSizes = this.mapDropdownItems(shoppingItem);
        this.currentShoppingItem = shoppingItem;
      }
    });
  }

  mapDropdownItems(shoppingItem) {
    const sizes = shoppingItem.sizes.map(item => {
      const mappedItem = {
        label: item.size,
        value: item.size
      };

      if (item.quantity <= 0) {
        mappedItem['disabled'] = true;
      }

      return mappedItem;
    });

    return sizes;
  }

  onCurrentShoppingItemSizeSelected(size) {
    this.currentShoppingItemSizeError = '';
    this.currentShoppingItemSize = size.value;
  }

  onSizeClicked(event) {
    this.currentShoppingItemSize = event.target.innerText;
  }

  ngOnDestroy() {
    this.currentShoppingItem = null;
    this.urlShoppingItemId = -1;
    this.appStateService.changeSelectedItemName('');
  }
}
