import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { delay, Observable, of } from "rxjs";
import { Post, PostsService } from "./posts.service";

@Injectable({ providedIn:'root' })
export class PostResolver implements Resolve<Post | undefined> {
    
    constructor(private postsService: PostsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Post | undefined | Observable<Post | undefined> | Promise<Post | undefined> {
        return of(this.postsService.getById(parseInt(route.params['id'])))
            .pipe(delay(500))
    }

}