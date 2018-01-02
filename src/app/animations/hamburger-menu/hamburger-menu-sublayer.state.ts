import { trigger, state, animate, transition, style, query, animateChild, group} from '@angular/animations';

export const hamburgerMenuSublayerState =
  trigger('hamburgerMenuSublayerState', [
    state('closed', style ({
      transform: 'translateX(-100%)'
    })),
    state('opened', style ({
      transform: 'translateX(0)'
    })),
    transition ('closed => opened', [
      animate('300ms ease-in')
    ]),
    transition ('opened => closed', [
      animate('700ms ease-out')
    ])
  ]);
