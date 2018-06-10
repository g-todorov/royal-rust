import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized} from '@angular/router';

import { hamburgerMenuState } from '../../animations/hamburger-menu/hamburger-menu.state';
import { hamburgerMenuContentState } from '../../animations/hamburger-menu/hamburger-menu-content.state';

import { AppStateService } from '../../services/app-state.service';

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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appStateService: AppStateService
  ) { }

  ngOnInit() {
    this.router.events.forEach((event) => {
      if (event instanceof RoutesRecognized) {

      }
    });

    this.appStateService.hamburgerMenuState.subscribe(state => {
      this.hamburgerMenuState = state;
    });

    this.appStateService.shoppingCartMenuState.subscribe(state => {
      this.shoppingCartState = state;
    });
  }

}
