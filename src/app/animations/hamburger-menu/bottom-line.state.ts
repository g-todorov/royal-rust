import { trigger, state, animate, transition, style, keyframes } from '@angular/animations';

export const bottomLineState =
  trigger('bottomLineState', [
    state('closed', style ({
      // background: 'blue'
    })),
    state('opened', style ({
      transform: 'rotate(-45deg)',
      bottom: 'calc(50% - 2.5px)'
    })),
    transition('closed => opened',
      animate('300ms ease-in', keyframes([
        style({bottom: 'calc(50% - 2.5px)', offset: 0.5}),
        style({transform: 'rotate(-45deg)', offset: 0.8}),
        style({transform: 'rotate(-50deg)', offset: 1.0})
      ])
    )),
    transition('opened => closed',
      animate('300ms ease-out', keyframes([
        style({transform: '*', offset: 0.5}),
        style({bottom: '*', offset: 1.0})
      ])
    ))
  ]);
