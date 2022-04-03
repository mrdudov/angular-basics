import {PostsComponent} from "./posts.component";
import {PostsService} from "./posts.service";
import {of} from "rxjs";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";

describe('PostsComponent', () => {
  let fixture: ComponentFixture<PostsComponent>
  let component: PostsComponent
  let service: PostsService

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsComponent ],
      providers: [ PostsService ],
      imports: [ HttpClientModule ]
    })

    fixture = TestBed.createComponent(PostsComponent)
    component = fixture.componentInstance

    // service = fixture.debugElement.injector.get(PostsService)
    service = TestBed.get(PostsService)

    // const spy = jasmine.createSpyObj('HttpClient', { post: of({}), get: of({}) })
    // service = new PostsService(spy)
    // component = new PostsComponent(service)
  })

  it('should fetch posts on ngOnInit', () => {
    const posts = [
      {title: 'title 1'},
      {title: 'title 2'}, 
      {title: 'title 3'}, 
      {title: 'title 4'}, 
    ]
    spyOn(service, 'fetch').and.returnValue(of(posts))
    fixture.detectChanges()
    expect(component.posts).toEqual(posts)
  })

})
