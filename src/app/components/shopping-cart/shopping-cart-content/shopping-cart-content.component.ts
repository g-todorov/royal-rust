import { Component, OnInit, Input} from '@angular/core';

import { AnimationsService } from '../../../services/animations.service'

import { shoppingCartContentState } from '../../../animations/shopping-cart/shopping-cart-content.state'

@Component({
  selector: 'app-shopping-cart-content',
  templateUrl: './shopping-cart-content.component.html',
  styleUrls: ['./shopping-cart-content.component.styl'],
  animations: [shoppingCartContentState]
})
export class ShoppingCartContentComponent implements OnInit {
  @Input() shoppingCartContentState:string;

  constructor( private shoppingCartService: AnimationsService) { }

  ngOnInit() {
    // this.shoppingCartService.changeShoppingCartState.subscribe(state => {
    //   this.shoppingCartContentState = state;
    // });
  }

}
