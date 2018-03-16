import { Component, OnInit } from '@angular/core';

import { AnimationsService } from '../../services/animations.service'
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.styl']
})
export class ShoppingCartComponent implements OnInit {
  shoppingCartContentState = 'closed';
  hamburgerMenuContentState = 'closed';

  constructor(private animationService: AnimationsService, private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.animationService.changeShoppingCartState.subscribe(state => {
      this.shoppingCartContentState = state;
    });

    this.animationService.changeHamburgerMenuState.subscribe(state => {
      this.hamburgerMenuContentState = state;
    });
  }
}
