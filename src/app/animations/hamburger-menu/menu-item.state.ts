import { trigger, state, animate, transition, style, query, animateChild } from '@angular/animations';

export const hamburgerMenuContentState =
  trigger('hamburgerMenuContentState', [
    state('closed', style ({
      background: 'red',
      transform: 'translateX(-100%)'
    })),
    state('opened', style ({
      background: 'black',
      transform: 'translateX(0)'
    })),
    transition ('closed <=> opened', [
      animate('300ms ease-in')
    ])
  ]);
