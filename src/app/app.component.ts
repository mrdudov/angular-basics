import { state, style, trigger } from '@angular/animations';
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
      }))
    ])
  ]
})
export class AppComponent {
  boxState = 'start'
  
  runAnimation() {
    this.boxState = this.boxState === 'end' ? 'start' : 'end'
  }

}
