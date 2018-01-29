import {
    trigger,
    state,
    style,
    animate,
    transition,
    query,
  } from '@angular/animations';

export function animation(name) {
   return trigger(name, [ transition('right => left', [
    // Initial state of new route
    query(':enter',
      style({
        position: 'fixed',
        width: '100vw',
        zIndex: '0',
        height: '100vh'
      }),
      {optional: true}),
    // move page off screen right on leave
    query(':leave',
      animate('300ms ease',
        style({
          position: 'fixed',
          width: '100vw',
          zIndex: '0',
          transform: 'translateX(-100%)',
          // opacity: '0'
        })
      ),
    {optional: true}),
  ]),
          transition('left => right', [
            // Initial state of new route
            query(':enter',
              style({
                position: 'fixed',
                width: '100%',
                zIndex: '1',
                transform: 'translateX(-100%)',
                height: '100vh'
              }),
              {optional: true}),
            // move page off screen right on leave
            query(':leave',
                style({
                  position: 'fixed',
                  width: '100vw',
                  height: '100vh',
                  zIndex: '0'
                })
              ,
            {optional: true}),
            // move page in screen from left to right
            query(':enter',
              animate('300ms ease',
                style({
                  // opacity: '1',
                  transform: 'translateX(0)',
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
                position: 'relative',
                 opacity: '0',
                //  width: '100%',
               }),
               {optional: true}),
             // move page off screen right on leave
             query(':leave',
               animate('0ms ease',
                 style({
                     position: 'fixed',
                   opacity: '0',
                 })
               ),
             {optional: true}),
             // move page in screen from left to right
             query(':enter',
               animate('600ms ease',
                 style({
                   opacity: '1',
                   transform:  ' translateX(0)'
                 })
               ),
             {optional: true}),
           ])
         ]);
 }

export function getState (outlet) {
   console.log(outlet.activatedRouteData.state);
   return outlet.activatedRouteData.state;
}

