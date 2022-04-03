import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RoutingComponent } from './routing.component';

describe('RoutingComponent', () => {
  let component: RoutingComponent;
  let fixture: ComponentFixture<RoutingComponent>;

  beforeEach(() => {
     TestBed.configureTestingModule({
      declarations: [ RoutingComponent ],
      imports: [RouterTestingModule]
    })

    fixture = TestBed.createComponent(RoutingComponent);
    component = fixture.componentInstance;
  });


  it('should be defined', () => {
    expect(component).toBeDefined();
  });

});
