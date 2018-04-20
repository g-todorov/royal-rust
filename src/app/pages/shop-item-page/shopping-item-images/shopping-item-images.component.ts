import { Component, OnInit, Input, AfterContentInit, ViewChildren, ContentChildren, QueryList, Output, EventEmitter} from '@angular/core';

import { ShoppingItemImageComponent } from '../shopping-item-image/shopping-item-image.component';

@Component({
  selector: 'app-shopping-item-images',
  templateUrl: './shopping-item-images.component.html',
  styleUrls: ['./shopping-item-images.component.styl']
})
export class ShoppingItemImagesComponent implements OnInit, AfterContentInit {
  @Input() shoppingItem;
  @Output() imagesRefsChanged = new EventEmitter();

  @ContentChildren(ShoppingItemImageComponent) images: QueryList<any>;

  constructor() { }

  ngOnInit() {

  }

  ngAfterContentInit() {
    debugger
    setTimeout(() => {this.imagesRefsChanged.emit(this.images.toArray()); }, 0);
  }

}
