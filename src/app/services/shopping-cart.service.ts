import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { LocalStorageService } from './local-storage.service';
import { count } from 'rxjs/operators';

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

  updateShoppingCartItem(key, prop, shoppingCartItem) {
    const currentShoppingItems = this.localStorageService.getLocalStorageItem('shoppingItems');

    let updatedItemIndex = -1;
    let duplicateItemIndex = -1;

    currentShoppingItems.forEach((shoppingItem, index) => {
      if (key === 'size' && shoppingItem.id === shoppingCartItem.id && shoppingItem.size === prop) {
        duplicateItemIndex = index;
      }
      if (shoppingItem.id === shoppingCartItem.id && shoppingItem.size === shoppingCartItem.size) {
        shoppingItem[key] = prop;
        updatedItemIndex = index;
      }
    });

    if (duplicateItemIndex > -1) {
      const duplicatedItemCount = currentShoppingItems[duplicateItemIndex]['count'];
      const updatedItemCount = currentShoppingItems[updatedItemIndex]['count'];
      currentShoppingItems[updatedItemIndex]['count'] = updatedItemCount + duplicatedItemCount;
      currentShoppingItems.splice(duplicateItemIndex, 1);
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
