import { Component, OnInit } from '@angular/core';

import { AppStateService } from '../../services/app-state.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.styl']
})
export class ShoppingCartComponent implements OnInit {
  shoppingCartContentState = 'closed';
  hamburgerMenuContentState = 'closed';

  constructor(private appStateService: AppStateService, private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.appStateService.shoppingCartMenuState.subscribe(state => {
      this.shoppingCartContentState = state;
    });

    this.appStateService.hamburgerMenuState.subscribe(state => {
      this.hamburgerMenuContentState = state;
    });
  }
}
