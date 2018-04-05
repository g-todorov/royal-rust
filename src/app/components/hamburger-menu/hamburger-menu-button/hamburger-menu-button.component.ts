import { Component, OnInit, Input} from '@angular/core';

import { AppStateService } from '../../../services/app-state.service';

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
  @Input() shoppingCartState: string;

  constructor(private appStateService: AppStateService) { }

  ngOnInit() {
  }

  toggleHamburgerMenu(state) {
    this.appStateService.toggleHamburgerMenuState(state);
  }

  setButtonClasses(): any {
    const classes = {
      'lower-z-index': this.shoppingCartState === 'opened'
    };

    return classes;
  }
}
