import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { find } from 'rxjs/operators';

@Injectable()
export class ShoppingCartService {

  shoppingCartStorage = this.getLocalStorageItem('shoppingItems');
  private sourceShoppingCartItems = new BehaviorSubject(this.shoppingCartStorage);
  shoppingCartItems = this.sourceShoppingCartItems.asObservable();

  constructor() {
  }

  setShoppingCartItem(newShoppingCartItem) {
    const currentShoppingItems = this.getLocalStorageItem('shoppingItems');

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

    this.setLocalStorageItem('shoppingItems', currentShoppingItems);

    this.sourceShoppingCartItems.next(currentShoppingItems);
  }

  getLocalStorageItem(key) {
    const currentShoppingItems = localStorage.getItem(key);
    return currentShoppingItems == null ? [] : JSON.parse(currentShoppingItems);
  }

  setLocalStorageItem(key, data) {
    const stringifiedShoppingItems = JSON.stringify(data);
    localStorage.setItem(key, stringifiedShoppingItems);
  }

}
