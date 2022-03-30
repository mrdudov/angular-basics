import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
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
        return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo, {
            headers: new HttpHeaders({
                'CustomHeader': Math.random().toString()
            })
        })
    }

    fetchTodo(): Observable<Todo[]> {
        let params = new HttpParams()
        params = params.append('_limit', '4')
        params = params.append('custom', 'any')
        return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
            // params: new HttpParams().set('_limit', '3')
            params: params
        })
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