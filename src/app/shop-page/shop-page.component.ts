import { Component, OnInit } from '@angular/core';

import { AnimationsService } from '../services/animations.service';

import { pageLandingState } from '../animations/page-landing.state';


@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.styl'],
  animations: [pageLandingState]
})
export class ShopPageComponent implements OnInit {
  menuState = 'closed';

  constructor(private hamburgerService: AnimationsService) { }

  ngOnInit() {
    this.hamburgerService.changeHamburgerMenuState.subscribe(state => {
      this.menuState = state;
    });
  }

}
