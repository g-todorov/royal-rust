import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.styl']
})
export class DropdownComponent implements OnInit, OnChanges {
  @Input() selectedItem;
  @Input() items;
  @Output() itemSelect = new EventEmitter();
  isOpen = false;

  constructor() { }

  ngOnInit() {
    // debugger
  }

  ngOnChanges(changes: SimpleChanges) {
    // debugger
    // console.log(changes);
  }

  onItemSelected(item) {
    this.itemSelect.emit(item);
  }

  toggleOptions(flag) {
    this.isOpen = !flag;
  }
}
