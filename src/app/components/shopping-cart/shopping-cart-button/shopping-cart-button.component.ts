import { Component, OnInit } from '@angular/core';

import {AnimationsService} from '../../../services/animations.service'

@Component({
  selector: 'app-shopping-cart-button',
  templateUrl: './shopping-cart-button.component.html',
  styleUrls: ['./shopping-cart-button.component.styl']
})
export class ShoppingCartButtonComponent implements OnInit {
  shoppingCartContentState = 'closed';

  constructor( private shoppingCartService: AnimationsService) { }

  ngOnInit() {
    this.shoppingCartService.changeShoppingCartState.subscribe(state => {
      this.shoppingCartContentState = state;
    });
  }

  test() {
    console.log('test')
  }

  toggleShoppingCart(state) {
    this.shoppingCartService.toggleShoppingCartState(state);
  }
}
