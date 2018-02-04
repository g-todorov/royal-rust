import { Component, OnInit, Input} from '@angular/core';

import { AnimationsService } from '../../../services/animations.service';

import { hamburgerMenuSublayerState } from '../../../animations/hamburger-menu/hamburger-menu-sublayer.state';

@Component({
  selector: 'app-hamburger-menu-sublayer',
  templateUrl: './hamburger-menu-sublayer.component.html',
  styleUrls: ['./hamburger-menu-sublayer.component.styl'],
  animations: [hamburgerMenuSublayerState]
})
export class HamburgerMenuSublayerComponent implements OnInit {
  @Input() hamburgerMenuContentState:string;

  constructor(private animationsService: AnimationsService) { }

  ngOnInit() {
  }

  toggleHamburgerMenu(state) {
    this.animationsService.toggleHamburgerMenuState(state);
  }

}
