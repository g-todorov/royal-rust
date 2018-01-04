import { trigger, state, animate, transition, style, query, group} from '@angular/animations';

export const routerTransition =
  trigger('routerTransition', [
    state('section', style({
      // opacity: 1
    })),
    transition ('* => shop', [
      query(':enter .shop-page-content', [
        style({
          transform: 'translateY(100%)'
        }),
        animate('300ms 500ms ease-in-out',
          style({ transform: 'translateY(0)' }))
      ], { optional: true }),
    ]),
    transition ('* <=> details', [
      group([
        query(':enter .item-details', [
          style({
            opacity: 0
          }),
          animate('300ms ease-in-out',
            style({ opacity: '1' }))
        ], { optional: true }),

        query(':enter .close-button', [
          style({
            opacity: 0,
            transform: 'translateX(30px)'
          }),
          animate('300ms ease-in-out',
            style({
              opacity: 1,
              transform: 'translateX(0px)'
            }))
        ], { optional: true }),

        query(':enter .description', [
          style({
            opacity: 0,
            transform: 'translateY(30px)'
          }),
          animate('300ms ease-in-out',
            style({
              opacity: 1,
              transform: 'translateY(0px)'
            }))
        ], { optional: true }),

        query(':leave .item-details', [
          animate('300ms ease-in-out',
            style({ opacity: '0' }))
        ], { optional: true })
      ])
    ])
  ]);
