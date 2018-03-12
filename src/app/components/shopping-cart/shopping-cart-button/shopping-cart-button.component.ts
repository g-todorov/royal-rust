import { Component, OnInit, Input} from '@angular/core';

import {AnimationsService} from '../../../services/animations.service';

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

  constructor( private animationsService: AnimationsService) { }

  ngOnInit() {
  }

  test() {
    console.log('test');
  }

  toggleShoppingCart(state) {
    this.animationsService.toggleShoppingCartState(state);
  }
}
