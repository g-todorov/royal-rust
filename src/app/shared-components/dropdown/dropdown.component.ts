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
    if (typeof this.selectedItem === 'undefined' || !this.selectedItem) {
      this.selectedItem = 'Select an option';
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes);
  }

  onBlurred(flag) {
    if (flag === true) {
      this._toggleOptions(flag);
    }
  }

  onDropdownTriggerClicked(flag) {
    this._toggleOptions(flag);
  }

  onItemSelected(item, flag) {
    if (item.disabled !== true) {
      this._toggleOptions(flag);
      this.itemSelect.emit(item);
    }
  }

  _toggleOptions(flag) {
    this.isOpen = !flag;
  }
}
