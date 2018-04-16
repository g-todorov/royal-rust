import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.styl']
})
export class CounterComponent implements OnInit {
  @Input() currentCount: number;
  @Output() countChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCountIncreased(currentCount) {
    this.countChange.emit(currentCount + 1);
  }

  onCountDecreased(currentCount) {
    this.countChange.emit(currentCount === 1 ? currentCount : currentCount - 1);
  }
}
