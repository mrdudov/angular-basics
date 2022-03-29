import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core'
import { delay } from 'rxjs';

export interface Todo {
  complited: boolean
  title: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todos: Todo[] = []

  loading = false

  todoTitle = ''

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchTodos()
  }

  addTodo() {
    if(!this.todoTitle.trim()){
      return
    }
    const newTodo: Todo = {
      title: this.todoTitle,
      complited: false
    }

    this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', newTodo)
      .subscribe(todo => {
        this.todos.push(todo)
        this.todoTitle = ''
      })
  }

  fetchTodos() {
    this.loading = true
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .pipe(delay(1500))
      .subscribe(todos => {
        this.todos = todos
        this.loading = false
      })
  }

}
