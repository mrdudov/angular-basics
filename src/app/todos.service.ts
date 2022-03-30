import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, delay, map, Observable, tap, throwError } from "rxjs";

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

    fetchTodo(): Observable<Todo[] | null> {
        let params = new HttpParams()
        params = params.append('_limit', '4')
        params = params.append('custom', 'any')
        return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
            // params: new HttpParams().set('_limit', '3')
            params: params,
            observe: 'response'
        })
            .pipe(
                map(response => {
                    // console.log(response)
                    return response.body
                }),
                delay(500),
                catchError(error => {
                    console.log('fetchTodo error', error.message)
                    return throwError(error)
                    // TODO: throwError(error) deprecated
                })
            )
    }

    removeTodo(id: number| undefined): Observable<any> {
        return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            observe: 'events'
        }).pipe(
            tap(event => {
                if (event.type === HttpEventType.Sent) {
                    console.log('Sent', event)
                }
                if (event.type === HttpEventType.Response) {
                    console.log('Response', event)
                }
            })
        )
    }

    compliteTodo(id: number | undefined): Observable<Todo> {
        return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            complited: true
        }, {
            responseType: 'json'
        })
    }

}