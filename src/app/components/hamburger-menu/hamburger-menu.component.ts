import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized} from '@angular/router';

import { hamburgerMenuState } from '../../animations/hamburger-menu/hamburger-menu.state';
import { hamburgerMenuContentState } from '../../animations/hamburger-menu/hamburger-menu-content.state';
import { hamburgerMenuSublayerState } from '../../animations/hamburger-menu/hamburger-menu-sublayer.state';
import { middleLineState } from '../../animations/hamburger-menu/middle-line.state';
import { bottomLineState } from '../../animations/hamburger-menu/bottom-line.state';
import { topLineState } from '../../animations/hamburger-menu/top-line.state';

import { AnimationsService } from '../../services/animations.service';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.styl'],
  animations: [
    hamburgerMenuState,
    hamburgerMenuSublayerState,
    hamburgerMenuContentState,
    middleLineState,
    bottomLineState,
    topLineState
  ]
})
export class HamburgerMenuComponent implements OnInit {
  hamburgerMenuState = 'closed';
  munuItemHoverState = 'notHovered';

  breadcrumbShopState = 'inactive';
  breadcrumbVideosState = 'inactive';
  breadcrumbMusicState = 'inactive';
  breadcrumbBioState = 'inactive';

  constructor(private route: ActivatedRoute, private router: Router, private hamburgerService: AnimationsService) { }

  ngOnInit() {
    this.router.events.forEach((event) => {
      if (event instanceof RoutesRecognized) {

      }
    });

    this.hamburgerService.changeHamburgerMenuState.subscribe(state => {
      this.hamburgerMenuState = state;
    });
  }

  toggleHamburgerMenu(state) {
    // if (state === 'closed') {
    //   this.hamburgerMenuState = 'opened';
    // } else if (state === 'opened') {
    //   this.hamburgerMenuState = 'closed';
    // }
    this.hamburgerService.toggleHamburgerMenuState(state);
  }

  // onMenuItemMouseEnter(state) {
  //   if (state === 'notHovered') {
  //     this.munuItemHoverState = 'hovered';
  //   } else if (state === 'hovered') {
  //     this.munuItemHoverState = 'notHovered';
  //   }
  // }

  // onMenuItemClicked() {

  // }

}
