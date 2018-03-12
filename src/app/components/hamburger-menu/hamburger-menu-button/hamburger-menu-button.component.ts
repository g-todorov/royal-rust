import { Component, OnInit, Input} from '@angular/core';

import { AnimationsService } from '../../../services/animations.service';

import { middleLineState } from '../../../animations/hamburger-menu/button/middle-line.state';
import { bottomLineState } from '../../../animations/hamburger-menu/button/bottom-line.state';
import { topLineState } from '../../../animations/hamburger-menu/button/top-line.state';

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
  @Input() hamburgerMenuContentState: string;

  constructor(private hamburgerMenuService: AnimationsService) { }

  ngOnInit() {
  }

  test() {
    console.log('test');
  }

  toggleHamburgerMenu(state) {
    this.hamburgerMenuService.toggleHamburgerMenuState(state);
  }

}
