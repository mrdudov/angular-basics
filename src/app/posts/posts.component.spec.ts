import {PostsComponent} from "./posts.component";
import {PostsService} from "./posts.service";
import {EMPTY, of} from "rxjs";

describe('PostsComponent', () => {
  let component: PostsComponent
  let service: PostsService

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', { post: of({}), get: of({}) })
    service = new PostsService(spy)
    component = new PostsComponent(service)
  })

  it('should call fetch when ngOnInit', () => {
    const spy = spyOn(service, 'fetch').and.callFake(() => {
      return EMPTY
    })
    component.ngOnInit()
    expect(spy).toHaveBeenCalled()
  })

  it('should update posts length after ngOnInit', () => {
    const posts = [1, 2, 3, 4]
    spyOn(service, 'fetch').and.returnValue(of(posts))
    component.ngOnInit()
    expect(component.posts.length).toBe(posts.length)
  })

})
