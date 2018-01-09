import { trigger, state, animate, transition, style, keyframes } from '@angular/animations';

export const pageLoadingState =
  trigger('pageLoadingState', [
    state('opened', style ({
      transform: 'translateY(0)'
    })),
    state('closed', style ({
      transform: 'translateY(100%)'
    })),
    transition('closed => opened',
      animate('500ms 500ms ease-in')),
    transition('opened => closed',
      animate('500ms ease-out'))
  ]);
