import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params} from '@angular/router';

import { AppStateService } from '../../services/app-state.service';

@Component({
  selector: 'app-videos-page',
  templateUrl: './videos-page.component.html',
  styleUrls: ['./videos-page.component.styl']
})
export class VideosPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private appStateService: AppStateService) { }

  ngOnInit() {
    const routerUrlSubscription = this.route.url.subscribe(params => {
      this.appStateService.changeSelectedMenuItemName(params[0].path);
    });
  }

}
