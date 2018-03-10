import { Component, OnInit, Input} from '@angular/core';

import {AnimationsService} from '../../../services/animations.service'

@Component({
  selector: 'app-shopping-cart-button',
  templateUrl: './shopping-cart-button.component.html',
  styleUrls: ['./shopping-cart-button.component.styl']
})
export class ShoppingCartButtonComponent implements OnInit {
  @Input() shoppingCartContentState:string;

  constructor( private animationsService: AnimationsService) { }

  ngOnInit() {
  }

  test() {
    console.log('test')
  }

  toggleShoppingCart(state) {
    this.animationsService.toggleShoppingCartState(state);
  }
}
