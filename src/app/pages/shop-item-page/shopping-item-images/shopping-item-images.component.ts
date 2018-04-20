import { Component, OnInit, Input, AfterContentInit, ContentChildren, ContentChild, QueryList, Output, EventEmitter,
  ElementRef} from '@angular/core';

import { ShoppingItemImageComponent } from '../shopping-item-image/shopping-item-image.component';

@Component({
  selector: 'app-shopping-item-images',
  templateUrl: './shopping-item-images.component.html',
  styleUrls: ['./shopping-item-images.component.styl']
})
export class ShoppingItemImagesComponent implements OnInit, AfterContentInit {
  @Input() shoppingItem;
  @Output() imagesRefsChanged = new EventEmitter();

  @ContentChildren(ShoppingItemImageComponent) images: QueryList<ElementRef>;

  constructor() { }

  ngOnInit() {

  }

  ngAfterContentInit() {
    setTimeout(() => {this.imagesRefsChanged.emit(this.images.toArray()); }, 0);
  }

}
