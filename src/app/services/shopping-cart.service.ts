import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ShoppingCartService {

  shoppingCartStorage = this.getLocalStorageItem('shoppingItems');
  private sourceShoppingCartItems = new BehaviorSubject(this.shoppingCartStorage);
  shoppingCartItems = this.sourceShoppingCartItems.asObservable();

  constructor() {
  }

  setShoppingCartItem(item) {
    const currentShoppingItems = this.getLocalStorageItem('shoppingItems');
    currentShoppingItems.push(item);
    this.setLocalStorageItem('shoppingItems', currentShoppingItems);

    this.sourceShoppingCartItems.next(currentShoppingItems); // this will make sure to tell every subscriber about the change.
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
