import { Directive, AfterViewInit, ElementRef, Renderer2, Input, OnInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[appScrollEvent]'
})
export class ScrollEventDirective implements OnInit, AfterViewInit, OnChanges {
  @Input() milestoneRefs: [ElementRef];

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    // console.log(this.milestoneRefs);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // console.log(this.milestoneRefs);
    // debugger

    const imageNodes = Array.from(this.element.nativeElement.querySelectorAll('img'));
    // console.log(imageNodes);

    const parentPosition = this.element.nativeElement.getBoundingClientRect();

    window.addEventListener('scroll', (e) => {
      const imageNodesPosition = imageNodes.map((nodeItem: Element) => {
        return nodeItem.getBoundingClientRect();
      });

      // console.log(this.element.nativeElement.scrollTop);
      const top = parentPosition.top; // + this.element.nativeElement.scrollTop;
      const bottom = parentPosition.bottom; // + this.element.nativeElement.scrollTop;

      const index = imageNodesPosition.findIndex(imagePosition => {
        return imagePosition.top < bottom && imagePosition.bottom > top;
      });
      console.log (index);
    }, true);
  }
}
