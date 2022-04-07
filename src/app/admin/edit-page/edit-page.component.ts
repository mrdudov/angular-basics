import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { Post } from 'src/app/shared/interfaces';
import { PostsService } from 'src/app/shared/posts.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit, OnDestroy {

  form: FormGroup | undefined
  post: Post | undefined
  submitted: boolean = false 
  uSub: Subscription | undefined

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(switchMap((params: Params) => {
        return this.postsService.getById(params['id'])
      })).subscribe((post: Post) => {
        this.post = post
        this.form = new FormGroup({
          title: new FormControl(post.title, Validators.required),
          text: new FormControl(post.text, Validators.required)
        })
      })
  }

  ngOnDestroy(): void {
    if(this.uSub) {
      this.uSub.unsubscribe() 
    }
  }

  submit() {
    if (this.form?.invalid) {
      return
    }

    this.submitted = true

    this.uSub =  this.postsService.update({
      id: this.post!.id,
      text: this.form?.value.text,
      title: this.form?.value.title,
      author: this.post!.author,
      date: this.post!.date
    }).subscribe(() => {
      this.submitted = false

    })
  }

}
