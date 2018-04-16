import { Component, OnInit, Input } from '@angular/core';

import { shoppingCartSublayerState } from '../../../animations/shopping-cart/shopping-cart-sublayer.state';

@Component({
  selector: 'app-shopping-cart-sublayer',
  templateUrl: './shopping-cart-sublayer.component.html',
  styleUrls: ['./shopping-cart-sublayer.component.styl'],
  animations: [shoppingCartSublayerState]
})
export class ShoppingCartSublayerComponent implements OnInit {
  @Input() shoppingCartContentState: string;

  constructor() { }

  ngOnInit() {
  }

}
