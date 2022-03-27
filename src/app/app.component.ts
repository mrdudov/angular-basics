import { Component } from '@angular/core';

export interface Post {
  title: string,
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  search = ''
  searchField = 'title'

  posts: Post[] = [
    {title: 'title 1', text: 'text 1'},
    {title: 'title 2', text: 'text 2'},
    {title: 'title 3', text: 'text 3'},
  ]

}
