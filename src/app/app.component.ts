import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  inputValue = '';
  constructor() {}

  onInpunt(event: any) {
    this.inputValue = (<HTMLInputElement>event.target).value;
  }

  onClick() {
    console.log('clik me button');
  }

  onBlure(srt: string) {
    this.inputValue = srt;
  }

}
