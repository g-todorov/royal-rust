import { Component, OnInit } from '@angular/core';

import { AnimationsService } from '../services/animations.service';

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

  constructor(private animtionService: AnimationsService) { }

  ngOnInit() {
    this.animtionService.changeHamburgerMenuState.subscribe(state => {
      this.hamburgerMenuState = state;
    });

    this.animtionService.changeShoppingCartState.subscribe(state => {
      this.shoppingCartMenuState = state;
    });
  }

  getPageState():string {
    if (this.shoppingCartMenuState == "closed" && this.hamburgerMenuState == "closed") {
      return 'opened'
    } else {
      return 'closed'
    }
  }

}
