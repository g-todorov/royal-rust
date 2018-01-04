import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class AnimationsService {
  hamburgerMenuState = 'closed';

  constructor() { }

  @Output() change: EventEmitter<string> = new EventEmitter();

  toggle(state) {
    if (state === 'closed') {
      this.hamburgerMenuState = 'opened';
    } else if (state === 'opened') {
      this.hamburgerMenuState = 'closed';
    }
    this.change.emit(this.hamburgerMenuState);
  }

}
