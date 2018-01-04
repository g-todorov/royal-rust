import { trigger, state, animate, transition, style, keyframes } from '@angular/animations';

export const pageLandingState =
  trigger('pageLandingState', [
    state('closed', style ({
      transform: 'translateY(0)'
    })),
    state('opened', style ({
      transform: 'translateY(100%)'
    })),
    transition('closed => opened',
      animate('500ms ease-in')),
    transition('opened => closed',
      animate('500ms 500ms ease-out'))
  ]);
