import { Component, OnInit } from '@angular/core'
import { delay } from 'rxjs';
import { Todo, TodosService } from './todos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todos: Todo[] = []

  loading = false

  todoTitle = ''

  error = ''

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.fetchTodos()
  }

  addTodo() {
    if(!this.todoTitle.trim()){
      return
    }

    this.todosService.addTodo({
      title: this.todoTitle,
      complited: false
    }).subscribe(todo => {
      this.todos.push(todo)
      this.todoTitle = ''
    })

  }

  fetchTodos() {
    this.loading = true
    this.todosService.fetchTodo()
      .subscribe(todos => {
        this.todos = todos
        this.loading = false
      }, error => {
        this.error = error.message
      })
  }

  removeTodo(id: number | undefined) {
    this.todosService.removeTodo(id)
      .subscribe(() => {
        this.todos = this.todos.filter(t => t.id !== id)
      })
  }

  compliteTodo(id: number | undefined) {
    this.todosService.compliteTodo(id).subscribe(todo => {
      this.todos.find(t => t.id === todo.id)!.complited = true
    })
  }

}
