import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Dynamic title';
  number = 42;
  arr = [1,2,3];
  obj = {
    a: 1,
    b: {
      c:2
    }
  }
  img = 'https://banner2.cleanpng.com/20180518/ptw/kisspng-react-logo-javascript-front-and-back-ends-user-int-5afef575942028.3034008315266584216067.jpg'

  constructor() {
    setTimeout(() => {
      this.img = 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/21_Angular-512.png'
    }, 3000)
  }

  
}
