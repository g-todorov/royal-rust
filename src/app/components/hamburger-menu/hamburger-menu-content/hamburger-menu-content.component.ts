import { Component, OnInit, Input} from '@angular/core';

import { AnimationsService } from '../../../services/animations.service'

import { hamburgerMenuContentState } from '../../../animations/hamburger-menu/hamburger-menu-content.state'

@Component({
  selector: 'app-hamburger-menu-content',
  templateUrl: './hamburger-menu-content.component.html',
  styleUrls: ['./hamburger-menu-content.component.styl'],
  animations: [hamburgerMenuContentState]
})
export class HamburgerMenuContentComponent implements OnInit {
  @Input() hamburgerMenuContentState: string;

  constructor(private animationsService: AnimationsService) { }

  ngOnInit() {
  }

  toggleHamburgerMenu(state) {
    this.animationsService.toggleHamburgerMenuState(state);
  }

}
