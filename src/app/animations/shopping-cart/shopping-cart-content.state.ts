import { trigger, state, animate, transition, style, query, animateChild, group} from '@angular/animations';

export const shoppingCartContentState =
  trigger('shoppingCartContentState', [
    state('closed', style ({
      transform: 'translateX(100%)'
    })),
    state('opened', style ({
      transform: 'translateX(0)'
    })),
    transition ('closed => opened', [
      group([
        animate('500ms ease-in'),
        group([
          query('.menu-logo', [
            style({
              transform: 'translateX(70%)',
              opacity: 0
            }),
            animate('500ms 500ms ease-in-out')
          ], { optional: true }),
          query('.menu-item-line', [
            style({
              transform: 'translateX(-100%)'
            }),
            animate('500ms 500ms ease-in-out')
          ], { optional: true }),
        ])
      ])
    ]),
    transition ('opened => closed', [
      group([
        animate('500ms ease-out'),
      ])
    ])
  ]);
