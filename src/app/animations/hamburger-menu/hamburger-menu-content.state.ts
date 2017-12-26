import { trigger, state, animate, transition, style, query, animateChild, group} from '@angular/animations';

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
    transition ('closed => opened', [
      group([
        animate('300ms ease-in'),
        query('.menu-item-line', [
          style({
            transform: 'translateX(-100%)',
          }),
          animate('300ms 300ms ease-in-out')
        ], { optional: true }),
      ])
    ]),
    transition ('opened => closed', [
      group([
        animate('300ms ease-out'),
      ])
    ])
  ]);
