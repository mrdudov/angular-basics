import { 
  animate, 
  group, 
  keyframes, 
  query, 
  sequence, 
  state, 
  style, 
  transition, 
  trigger 
} from '@angular/animations';
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
        group([
          query('h4', animate(1500, style({
            fontSize: '.5rem',
            color: 'red'
          }))),
          style({background:'green'}),
          animate(1000, style({
            background: 'pink'
          })),
          animate(750)
        ])
      ]),
      // void => *
      transition(':enter', [
        animate('4s', keyframes([
          style({background: 'red', offset: 0}),
          style({background: 'black', offset: 0.2}),
          style({background: 'orange', offset: 0.3}),
          style({background: 'blue', offset: 1}),
        ]))
        // style({opacity: 0}),
        // animate('850ms ease-out')
      ]),
      // * => void
      transition(':leave', [
        style({opacity: 1}),
        // sequence()
        group([
          animate('850ms ease-out', style({
            opacity: 0,
            transform: 'scale(1.2)'
          })),
          animate(300, style({
            color: '#000',
            fontWeight: 'bold'
          }))
        ])
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
