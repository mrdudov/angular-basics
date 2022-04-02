import {PostsComponent} from "./posts.component";
import {PostsService} from "./posts.service";
import {of} from "rxjs";

describe('PostsComponent', () => {
  let component: PostsComponent
  let service: PostsService

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', { post: of({}), get: of({}) })
    service = new PostsService(spy)
    component = new PostsComponent(service)
  })

})
