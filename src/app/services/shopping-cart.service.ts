import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ShoppingCartService {

  shoppingCartStorage = this.getLocalStorageItem('shoppingItems');
  shoppingCartItems = new BehaviorSubject(this.shoppingCartStorage); 

  constructor() {
  }

  setShoppingCartItem(item) {
    let currentShoppingItems = this.getLocalStorageItem('shoppingItems');
    let updatedShoppingItems = currentShoppingItems.push(item);
    this.setLocalStorageItem('shoppingItems', updatedShoppingItems);

    this.shoppingCartItems.next(currentShoppingItems); // this will make sure to tell every subscriber about the change.
  }

  getLocalStorageItem(key) {
    let currentShoppingItems = localStorage.getItem(key);
    return currentShoppingItems == null ? [] : JSON.parse(currentShoppingItems);
  }

  setLocalStorageItem(key, data) {
    let stringifiedShoppingItems = JSON.stringify(data);
    localStorage.setItem(key, stringifiedShoppingItems);
  }

}
