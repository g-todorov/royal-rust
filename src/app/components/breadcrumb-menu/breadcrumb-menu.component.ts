import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params} from '@angular/router';

import { AppStateService } from '../../services/app-state.service';

@Component({
  selector: 'app-breadcrumb-menu',
  templateUrl: './breadcrumb-menu.component.html',
  styleUrls: ['./breadcrumb-menu.component.styl']
})
export class BreadcrumbMenuComponent implements OnInit {
  hamburgerMenuContentState = 'closed';
  shoppingCartState = 'closed';
  selectedItemName: string;
  selectedMenuItemName: string;

  constructor(private appStateService: AppStateService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.appStateService.changeSelectedItemState.subscribe(name => {
      this.selectedItemName = name;
    });

    this.appStateService.changeSelectedMenuItemState.subscribe(name => {
      this.selectedMenuItemName = name;
    });

    this.appStateService.changeHamburgerMenuState.subscribe(state => {
      this.hamburgerMenuContentState = state;
    });

    this.appStateService.changeShoppingCartState.subscribe(state => {
      this.shoppingCartState = state;
    });
  }

  setBreadcrumbClasses(): any {
    const classes = {
      'shop': this.selectedMenuItemName === 'shop',
      'videos': this.selectedMenuItemName === 'videos',
      'active': this.hamburgerMenuContentState === 'closed',
      'inactive': this.hamburgerMenuContentState === 'opened',
      'lower-z-index': this.shoppingCartState === 'opened'
    };

    return classes;
  }
}
