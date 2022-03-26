import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arr = [1, 1, 2, 3, 5, 8, 13]

  objs = [
    {title: 'post 1', author: 'author 1', comments: [
      {name: 'Max', text: 'lorem 1'},
      {name: 'Max', text: 'lorem 2'},
      {name: 'Max', text: 'lorem 3'},
    ]},
    {title: 'post 2', author: 'author 2', comments: [
      {name: 'Mix', text: 'lorem 1'},
      {name: 'Mix', text: 'lorem 2'},
      {name: 'Mix', text: 'lorem 3'},
    ]}
  ]

}
