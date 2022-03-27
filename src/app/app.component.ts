import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  e: number = Math.E
  
  str: string = 'hello world'

  date: Date = new Date()

}
