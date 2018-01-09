import { Component, OnInit } from '@angular/core';

import { AnimationsService } from '../../../services/animations.service'

import { middleLineState } from '../../../animations/hamburger-menu/middle-line.state';
import { bottomLineState } from '../../../animations/hamburger-menu/bottom-line.state';
import { topLineState } from '../../../animations/hamburger-menu/top-line.state';

@Component({
  selector: 'app-hamburger-menu-button',
  templateUrl: './hamburger-menu-button.component.html',
  styleUrls: ['./hamburger-menu-button.component.styl'],
  animations: [
    middleLineState,
    bottomLineState,
    topLineState
  ]
})
export class HamburgerMenuButtonComponent implements OnInit {

  hamburgerMenuContentState = 'closed';

  constructor( private  hamburgerMenuService: AnimationsService) { }

  ngOnInit() {
    this.hamburgerMenuService.changeHamburgerMenuState.subscribe(state => {
      this.hamburgerMenuContentState = state;
    });
  }

  test() {
    console.log('test')
  }

  toggleHamburgerMenu(state) {
    this.hamburgerMenuService.toggleHamburgerMenuState(state);
  }

}
