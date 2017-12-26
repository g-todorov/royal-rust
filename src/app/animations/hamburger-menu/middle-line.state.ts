import { trigger, state, animate, transition, style } from '@angular/animations';

export const middleLineState =
  trigger('middleLineState', [
    state('closed', style ({
      // background: 'blue'
    })),
    state('opened', style ({
      background: 'none'
    })),
    transition('closed <=> opened', animate('300ms ease-in'))
  ]);
