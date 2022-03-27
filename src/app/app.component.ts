import { Component, OnInit } from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  posts:(Post | undefined)[] = [
    {title: 'Title 1', text: 'text 1', id:1},
    {title: 'Title 2', text: 'text 2', id:2}
  ]

  ngOnInit(): void {
    setTimeout(() => {
      console.log('Timeout')
      this.posts[0]! = {
        title: 'Changed!',
        text: 'Changed text',
        id: 4
      }
    }, 5000)
  }

  updatePosts(post?: Post) {
    this.posts.unshift(post)
  }

  removePost(id: number) {
    this.posts = this.posts.filter(p => p?.id !== id)
  }

}
