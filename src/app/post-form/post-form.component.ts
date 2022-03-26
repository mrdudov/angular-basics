import { 
  Component, 
  ElementRef, 
  EventEmitter, 
  OnInit, 
  Output, 
  ViewChild 
} from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()

  @ViewChild('titleInput', {static: false}) inputRef?: ElementRef

  title: string = ''
  text:string = ''

  constructor() { }

  ngOnInit(): void {
  }

  addPost() {
    if(this.title.trim() && this.text.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text
      }
      this.onAdd.emit(post)
      this.title = ''
      this.text = ''
    }
  }

  FocusOnTitle() {
    this.inputRef?.nativeElement.focus()
  }

}
