import { Component } from '@angular/core';

import { routerTransition } from './animations/router-transition.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
  animations: [
    routerTransition
  ]
})
export class AppComponent {
  getState(outlet) {
    // console.log(outlet.activatedRouteData.state);
    return outlet.activatedRouteData.state;
  }
}
