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
  shippingCartSubtotal = 0;
  shoppingCartItemSizes = [
    {
      label: 'XS',
      value: 'XS'
    },
    {
      label: 'S',
      value: 'S'
    },
    {
      label: 'M',
      value: 'M'
    },
    {
      label: 'L',
      value: 'L'
    },
    {
      label: 'XL',
      value: 'XL'
    }
  ];

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.shoppingCartService.shoppingCartItems.subscribe((shoppingCartItems) => {
      this.shoppingCartItems = shoppingCartItems;
      this.shippingCartSubtotal = this.calculateSubtotal(this.shoppingCartItems);
    });
  }

  calculateSubtotal(items): number {
    const subtotal = items.reduce((sum, currentValue) => {
        return sum + currentValue.count * parseInt(currentValue.price, 10);
      },
      0
    );

    return subtotal;
  }

  deleteShoppingCartItem(item) {
    this.shoppingCartService.deleteShoppingCartItem(item);
  }

  onShoppingItemSizeSelected(size, item) {
    this.shoppingCartService.updateShoppingCartItem('size', size.value, item);
  }

  onShoppingItemCountChanged(count, item) {
    this.shoppingCartService.updateShoppingCartItem('count', count, item);
  }

}
