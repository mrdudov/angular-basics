import { Component } from '@angular/core';
import { boxAnimation } from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ boxAnimation ]
})
export class AppComponent {

  boxState = 'start'
  visible = true

  runAnimation() {
    this.boxState = this.boxState === 'end' ? 'start' : 'end'
  }

  animationStart(event: any) {
    console.log('animationStart', event)
  }

}
