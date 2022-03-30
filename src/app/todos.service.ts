import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, delay, Observable, throwError } from "rxjs";

export interface Todo {
    complited: boolean
    title: string
    id?: number
}

@Injectable({providedIn: 'root'})
export class TodosService {
    constructor(private http: HttpClient) {}

    addTodo(todo: Todo): Observable<Todo> {
        return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo)
    }

    fetchTodo(): Observable<Todo[]> {
        return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos1?_limit=2')
            .pipe(
                delay(500),
                catchError(error => {
                    console.log('fetchTodo error', error.message)
                    return throwError(error)
                    // TODO: throwError(error) deprecated
                })
            )
    }

    removeTodo(id: number| undefined): Observable<void> {
        return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)
    }

    compliteTodo(id: number | undefined): Observable<Todo> {
        return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            complited: true
        })
    }

}