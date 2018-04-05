import { Component, OnInit, Input} from '@angular/core';

import { hamburgerMenuSublayerState } from '../../../animations/hamburger-menu/hamburger-menu-sublayer.state';

@Component({
  selector: 'app-hamburger-menu-sublayer',
  templateUrl: './hamburger-menu-sublayer.component.html',
  styleUrls: ['./hamburger-menu-sublayer.component.styl'],
  animations: [hamburgerMenuSublayerState]
})
export class HamburgerMenuSublayerComponent implements OnInit {
  @Input() hamburgerMenuContentState: string;

  constructor() { }

  ngOnInit() {
  }

}
