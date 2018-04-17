import { Component, OnInit, Input} from '@angular/core';

import { AppStateService } from '../../../services/app-state.service';
import { ShoppingCartService } from '../../../services/shopping-cart.service';

import { ShoppingItem } from '../../../models/shopping-item';

import { bottomLineState } from '../../../animations/shopping-cart/button/bottom-line.state';
import { leftLineState } from '../../../animations/shopping-cart/button/left-line.state';
import { rightLineState } from '../../../animations/shopping-cart/button/right-line.state';

@Component({
  selector: 'app-shopping-cart-button',
  templateUrl: './shopping-cart-button.component.html',
  styleUrls: ['./shopping-cart-button.component.styl'],
  animations: [
    bottomLineState,
    leftLineState,
    rightLineState
  ]
})
export class ShoppingCartButtonComponent implements OnInit {
  @Input() shoppingCartContentState: string;
  @Input() hamburgerMenuContentState: string;
  shoppingCartItemsCount: number;

  constructor(private appStateService: AppStateService, private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.shoppingCartService.shoppingCartItems.subscribe((shoppingCartItems: ShoppingItem[]) => {
      this.shoppingCartItemsCount = shoppingCartItems.reduce((summedCount, currentValue) => {
        return summedCount + currentValue.count;
      },
      0
    );
    });
  }

  toggleShoppingCart(state) {
    this.appStateService.toggleShoppingCartState(state);
  }

  setButtonClasses() {
    const classes = {
      'lower-z-index': this.hamburgerMenuContentState === 'opened'
    };

    return classes;
  }
}
