import { Component, OnInit, Input } from '@angular/core';

import { AnimationsService } from '../../services/animations.service';

@Component({
  selector: 'app-breadcrumb-menu',
  templateUrl: './breadcrumb-menu.component.html',
  styleUrls: ['./breadcrumb-menu.component.styl']
})
export class BreadcrumbMenuComponent implements OnInit {
  selectedItemName: string;
  hamburgerMenuContentState = 'closed';

  constructor(private stateService: AnimationsService) { }

  ngOnInit() {
    this.stateService.changeSelectedItemState.subscribe(name => {
      this.selectedItemName = name;
    });

    this.stateService.changeHamburgerMenuState.subscribe(state => {
      this.hamburgerMenuContentState = state;
    });
  }

}
