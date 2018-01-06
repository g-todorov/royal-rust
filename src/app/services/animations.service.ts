import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class AnimationsService {
  hamburgerMenuState = 'closed';
  shoppingCartMenuState = 'closed'

  constructor() { }

  @Output() changeHamburgerMenuState: EventEmitter<string> = new EventEmitter();
  @Output() changeShoppingCartState: EventEmitter<string> = new EventEmitter();

  toggleHamburgerMenuState(state) {
    if (state === 'closed') {
      this.hamburgerMenuState = 'opened';
    } else if (state === 'opened') {
      this.hamburgerMenuState = 'closed';
    }
    this.changeHamburgerMenuState.emit(this.hamburgerMenuState);
  }

  toggleShoppingCartState(state) {
    if (state === 'closed') {
      this.shoppingCartMenuState = 'opened';
    } else if (state === 'opened') {
      this.shoppingCartMenuState = 'closed';
    }
    this.changeShoppingCartState.emit(this.shoppingCartMenuState);
  }

}
