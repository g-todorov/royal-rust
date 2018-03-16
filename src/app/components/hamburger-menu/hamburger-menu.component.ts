import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized} from '@angular/router';

import { hamburgerMenuState } from '../../animations/hamburger-menu/hamburger-menu.state';
import { hamburgerMenuContentState } from '../../animations/hamburger-menu/hamburger-menu-content.state';

import { AnimationsService } from '../../services/animations.service';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.styl'],
  animations: [
    hamburgerMenuState,
    hamburgerMenuContentState
  ]
})
export class HamburgerMenuComponent implements OnInit {
  hamburgerMenuState = 'closed';
  shoppingCartState = 'closed';
  // munuItemHoverState = 'notHovered';

  // breadcrumbShopState = 'inactive';
  // breadcrumbVideosState = 'inactive';
  // breadcrumbMusicState = 'inactive';
  // breadcrumbBioState = 'inactive';

  constructor(private route: ActivatedRoute, private router: Router, private animationService: AnimationsService) { }

  ngOnInit() {
    this.router.events.forEach((event) => {
      if (event instanceof RoutesRecognized) {

      }
    });

    this.animationService.changeHamburgerMenuState.subscribe(state => {
      this.hamburgerMenuState = state;
    });

    this.animationService.changeShoppingCartState.subscribe(state => {
      this.shoppingCartState = state;
    });
  }
}
