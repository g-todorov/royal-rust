import { trigger, state, animate, transition, style, keyframes} from '@angular/animations';

export const topLineState =
  trigger('topLineState', [
    state('closed', style ({
      // background: 'blue',
    })),
    state('opened', style ({
      transform: 'rotate(45deg)',
      top: 'calc(50% - 2.5px)'
    })),
    transition('closed => opened',
      animate('300ms ease-in', keyframes([
        style({top: 'calc(50% - 2.5px)', offset: 0.5}),
        style({transform: 'rotate(50deg)', offset: 0.8}),
        style({transform: 'rotate(45deg)', offset: 1.0})
      ])
    )),
    transition('opened => closed',
      animate('300ms ease-out', keyframes([
        style({transform: '*', offset: 0.5}),
        style({top: '*', offset: 1.0})
      ])
    ))
  ]);
