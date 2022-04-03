import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of, Subject } from 'rxjs';

import { RoutingComponent } from './routing.component';

class RouterStub {
  navigate(path: string[]) {}
}

class ActivatedRouteStab {
  private subject = new Subject<Params>()

  push(params: Params) {
    this.subject.next(params)
  }
  get params() {
    return this.subject.asObservable()
  }
  // params: Observable<Params> = of({someParam: 'value'})
}

describe('RoutingComponent', () => {
  let component: RoutingComponent;
  let fixture: ComponentFixture<RoutingComponent>;

  beforeEach(() => {
     TestBed.configureTestingModule({
      declarations: [ RoutingComponent ],
      imports: [RouterTestingModule],
      providers: [
        {provide: Router, useClass: RouterStub},
        {provide: ActivatedRoute, useClass: ActivatedRouteStab},
      ]
    })

    fixture = TestBed.createComponent(RoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges()
  });


  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('shold navigate to posts if go back', () => {
    let router= TestBed.get(Router)
    let spy = spyOn(router, 'navigate')
    component.goBack()
    expect(spy).toHaveBeenCalledWith(['/posts'])
  })

  it('should navigate to 404 if id = 0', () => {
    let router = TestBed.get(Router)
    let route: ActivatedRouteStab = TestBed.get(ActivatedRoute)
    let spy = spyOn(router, 'navigate')
    route.push({id: '0'})
    expect(spy).toHaveBeenCalledOnceWith(['/404'])
  })
});
