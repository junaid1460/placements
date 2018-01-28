import {
    trigger,
    state,
    style,
    animate,
    transition,
    query,
  } from '@angular/animations';

export function animation(name) {
   return trigger(name, [
          transition('* <=> *', [
            // Initial state of new route
            query(':enter',
              style({
                position: 'fixed',
                width: '100%',
                opacity: '0',
                transform: 'scale(1.5)'
              }),
              {optional: true}),
            // move page off screen right on leave
            query(':leave',
              animate('500ms ease',
                style({
                  position: 'fixed',
                  width: '100%',
                  opacity: '0',
                  transform: 'scale(1.5)'
                })
              ),
            {optional: true}),
            // move page in screen from left to right
            query(':enter',
              animate('500ms ease',
                style({
                  opacity: 1,
                  transform: 'scale(1)'
                })
              ),
            {optional: true}),
          ])
        ]);
}

export function animation2(name) {
    return trigger(name, [
           transition('* <=> *', [
             // Initial state of new route
             query(':enter',
               style({
                position: 'fixed',
                 opacity: '0',
                 transform: 'translateX(50%)'
               }),
               {optional: true}),
             // move page off screen right on leave
             query(':leave',
               animate('50ms ease',
                 style({
                   opacity: '0',
                 })
               ),
             {optional: true}),
             // move page in screen from left to right
             query(':enter',
               animate('500ms ease',
                 style({
                   opacity: '1',
                   transform:  'scale(1) translateX(0)'
                 })
               ),
             {optional: true}),
           ])
         ]);
 }

export function getState (outlet) {
   return outlet.activatedRouteData.state;
}

