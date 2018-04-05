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
  }

  setBreadcrumbClasses(): any {
    const classes = {
      'shop': this.selectedMenuItemName === 'shop',
      'videos': this.selectedMenuItemName === 'videos',
      'closed': this.hamburgerMenuContentState === 'closed',
      'opened': this.hamburgerMenuContentState === 'opened'
    };

    return classes;
  }
}
