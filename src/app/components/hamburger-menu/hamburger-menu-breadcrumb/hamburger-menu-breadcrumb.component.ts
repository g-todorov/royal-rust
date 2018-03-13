import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu-breadcrumb',
  templateUrl: './hamburger-menu-breadcrumb.component.html',
  styleUrls: ['./hamburger-menu-breadcrumb.component.styl']
})
export class HamburgerMenuBreadcrumbComponent implements OnInit {
  @Input() hamburgerMenuContentState: string;

  constructor() { }

  ngOnInit() {
  }

}
