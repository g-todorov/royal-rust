import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quantity-counter',
  templateUrl: './quantity-counter.component.html',
  styleUrls: ['./quantity-counter.component.styl']
})
export class QuantityCounterComponent implements OnInit {
  @Input() currentQuantity: number;
  @Output() quantityChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onQuantityIncreased(currentQuantity) {
    this.quantityChange.emit(currentQuantity + 1);
  }

  onQuantityDecreased(currentQuantity) {
    this.quantityChange.emit(currentQuantity === 1 ? currentQuantity : currentQuantity - 1);
  }
}
