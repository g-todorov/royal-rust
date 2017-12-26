import { trigger, state, animate, transition, style, query, animateChild } from '@angular/animations';

export const hamburgerMenuState =
  trigger('hamburgerMenuState', [
    state('closed', style ({
      background: 'red'
    })),
    state('opened', style ({
      background: 'black'
    })),
    transition ('closed <=> opened', [
      // query('@topLineState', [
      //   animateChild()
      // ], { optional: true }),
      // query('@middleLineState', [
      //   animateChild()
      // ], { optional: true }),
      // query('@bottomLineState', [
      //   animateChild()
      // ], { optional: true }),
      animate('300ms ease-in')]),
  ]);
