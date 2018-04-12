import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { find } from 'rxjs/operators';

import { LocalStorageService } from './local-storage.service';

@Injectable()
export class ShoppingCartService {

  shoppingCartStorage = this.localStorageService.getLocalStorageItem('shoppingItems');
  private sourceShoppingCartItems = new BehaviorSubject(this.shoppingCartStorage);
  shoppingCartItems = this.sourceShoppingCartItems.asObservable();

  constructor(private localStorageService: LocalStorageService) {
  }

  setShoppingCartItem(newShoppingCartItem) {
    const currentShoppingItems = this.localStorageService.getLocalStorageItem('shoppingItems');

    const existingShoppingItem = currentShoppingItems.find(currentItem => {
      if (currentItem.id === newShoppingCartItem.id && currentItem.size === newShoppingCartItem.size) {
        return currentItem;
      }
    });

    if (typeof(existingShoppingItem) === 'undefined') {
      newShoppingCartItem.count = 1;
      currentShoppingItems.push(newShoppingCartItem);
    } else {
      const index = currentShoppingItems.indexOf(existingShoppingItem);
      existingShoppingItem.count++;
      currentShoppingItems[index] = existingShoppingItem;
    }

    this.localStorageService.setLocalStorageItem('shoppingItems', currentShoppingItems);
    this.sourceShoppingCartItems.next(currentShoppingItems);
  }

  deleteShoppingCartItem(shoppingCartItem) {
    const currentShoppingItems = this.localStorageService.getLocalStorageItem('shoppingItems');

    const filteredCurrentShoppingItems = currentShoppingItems.filter(item => {

      if (item.id === shoppingCartItem.id && item.size === shoppingCartItem.size) {
        return;
      }

      return item;
    });

    this.localStorageService.setLocalStorageItem('shoppingItems', filteredCurrentShoppingItems);
    this.sourceShoppingCartItems.next(filteredCurrentShoppingItems);
  }

}
