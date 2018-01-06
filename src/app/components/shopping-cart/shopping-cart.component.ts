import { Component, OnInit } from '@angular/core';

import { AnimationsService } from '../../services/animations.service'

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.styl']
})
export class ShoppingCartComponent implements OnInit {
  shoppingCartContentState = 'closed';

  constructor( private shoppingCartService: AnimationsService) { }

  ngOnInit() {
    this.shoppingCartService.changeShoppingCartState.subscribe(state => {
      this.shoppingCartContentState = state;
    });
  }
}
