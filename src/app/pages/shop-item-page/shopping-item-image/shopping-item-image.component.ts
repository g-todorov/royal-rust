import { Component, OnInit, Input, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-shopping-item-image',
  templateUrl: './shopping-item-image.component.html',
  styleUrls: ['./shopping-item-image.component.styl']
})
export class ShoppingItemImageComponent implements OnInit, AfterViewInit {
  @Input() srcUrl;

  constructor(public element: ElementRef) {
   }

  ngOnInit() {
    // this.elementRef = this.element.nativeElement;
  }

  ngAfterViewInit() {
    // this.elementRef = this.element.nativeElement;
  }

}
