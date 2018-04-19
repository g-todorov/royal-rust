import { Directive, AfterViewInit, ElementRef, Renderer2, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appScrollEvent]'
})
export class ScrollEventDirective implements OnInit, AfterViewInit, OnChanges {
  @Input() milestoneRefs: [ElementRef];
  @Output() scrollItemChange = new EventEmitter();

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    // console.log(this.milestoneRefs);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const imageNodes = Array.from(this.element.nativeElement.querySelectorAll('img'));

    const parentPosition = this.element.nativeElement.getBoundingClientRect();

    window.addEventListener('scroll', (e) => {
      const imageNodesPosition = imageNodes.map((nodeItem: Element) => {
        return nodeItem.getBoundingClientRect();
      });

      const top = parentPosition.top; // + this.element.nativeElement.scrollTop;
      const bottom = parentPosition.bottom; // + this.element.nativeElement.scrollTop;

      const index = imageNodesPosition.findIndex(imagePosition => {
        return imagePosition.top < bottom && imagePosition.bottom > top;
      });

      this.scrollItemChange.emit(index);

    }, true);
  }
}
