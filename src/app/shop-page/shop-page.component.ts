import { Component, OnInit } from '@angular/core';

import { AnimationsService } from '../services/animations.service';
import { ApiService } from '../api-service/api.service';

import { pageLoadingState } from '../animations/page-loading.state';


@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.styl'],
  animations: [pageLoadingState]
})
export class ShopPageComponent implements OnInit {
  hamburgerMenuState = 'closed';
  shoppingCartMenuState = 'closed';
  shoppingItems:[any];

  constructor(private animtionService: AnimationsService, private apiService: ApiService) { }

  ngOnInit() {
    this.animtionService.changeHamburgerMenuState.subscribe(state => {
      this.hamburgerMenuState = state;
    });

    this.animtionService.changeShoppingCartState.subscribe(state => {
      this.shoppingCartMenuState = state;
    });

    this.getShoppingItems()
    debugger
  }

  getShoppingItems(): void {
    this.apiService.getShoppingItems().subscribe(shoppingItems => {
      this.shoppingItems = shoppingItems
    });
  }

  getPageState():string {
    if (this.shoppingCartMenuState == "closed" && this.hamburgerMenuState == "closed") {
      console.log('opened')
      return 'opened'
    } else {
      console.log('closed')
      return 'closed'
    }
  }

}
