import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('box', [
      state('start', style({background: 'blue'})),
      state('end', style({
        background: 'red',
        transform: 'scale(1.2)'
      })),
      state('special', style({
        background: 'orange',
        transform: 'scale(0.5)',
        borderRadius: '50%'
      })),
      transition('start => end', animate(450)),
      transition('end => start', animate('800ms ease-in-out')),
      transition('special <=> *', [
        style({background:'green'}),
        animate(1000, style({
          background: 'pink'
        })),
        animate(750)
      ]),
      // void => *
      transition(':enter', [
        style({opacity: 0}),
        animate('850ms ease-out')
      ]),
      // * => void
      transition(':leave', [
        style({opacity: 1}),
        animate('850ms ease-out', style({
          opacity: 0,
          transform: 'scale(1.2)'
        }))
      ])
    ])
  ]
})
export class AppComponent {
  boxState = 'start'
  visible = true
  runAnimation() {
    this.boxState = this.boxState === 'end' ? 'start' : 'end'
  }

}
