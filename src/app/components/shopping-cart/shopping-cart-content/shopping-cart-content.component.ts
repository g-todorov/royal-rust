import { Component, OnInit, Input} from '@angular/core';

import { ShoppingCartService } from '../../../services/shopping-cart.service';

import { ShoppingItem } from '../../../models/shopping-item';

import { shoppingCartContentState } from '../../../animations/shopping-cart/shopping-cart-content.state';

@Component({
  selector: 'app-shopping-cart-content',
  templateUrl: './shopping-cart-content.component.html',
  styleUrls: ['./shopping-cart-content.component.styl'],
  animations: [shoppingCartContentState]
})
export class ShoppingCartContentComponent implements OnInit {
  @Input() shoppingCartContentState: string;
  shoppingCartItems: ShoppingItem[];

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.shoppingCartService.shoppingCartItems.subscribe((shoppingCartItems) => {
      this.shoppingCartItems = shoppingCartItems;
    });
  }

  deleteShoppingCartItem(item) {
    this.shoppingCartService.deleteShoppingCartItem(item);
  }

}
