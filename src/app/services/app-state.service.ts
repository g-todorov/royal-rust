import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AppStateService {

  private sourceHamburgerMenuState = new BehaviorSubject('closed');
  hamburgerMenuState = this.sourceHamburgerMenuState.asObservable();

  private sourceShoppingCartMenuState = new BehaviorSubject('closed');
  shoppingCartMenuState = this.sourceShoppingCartMenuState.asObservable();

  private sourceSelectedItemName = new BehaviorSubject('');
  selectedItemName = this.sourceSelectedItemName.asObservable();

  private sourceSelectedMenuItemName = new BehaviorSubject('');
  selectedMenuItemName = this.sourceSelectedMenuItemName.asObservable();

  constructor() { }

  toggleHamburgerMenuState(state) {
    if (state === 'closed') {
      this.sourceHamburgerMenuState.next('opened');
    } else if (state === 'opened') {
      this.sourceHamburgerMenuState.next('closed');
    }
  }

  toggleShoppingCartState(state) {
    if (state === 'closed') {
      this.sourceShoppingCartMenuState.next('opened');
    } else if (state === 'opened') {
      this.sourceShoppingCartMenuState.next('closed');
    }
  }

  changeSelectedItemName(name) {
    this.sourceSelectedItemName.next(name);
  }

  changeSelectedMenuItemName(name) {
    this.sourceSelectedMenuItemName.next(name);
  }

  // getPageState() Possible solution for initial page loading
  getShopPageState() {

  }

}
