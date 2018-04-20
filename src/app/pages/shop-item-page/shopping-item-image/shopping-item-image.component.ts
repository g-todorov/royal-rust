import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-item-image',
  templateUrl: './shopping-item-image.component.html',
  styleUrls: ['./shopping-item-image.component.styl']
})
export class ShoppingItemImageComponent implements OnInit {
  @Input() srcUrl;

  constructor() { }

  ngOnInit() {
  }

}
