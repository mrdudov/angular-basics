import {ComponentFixture, TestBed} from '@angular/core/testing'
import { By } from '@angular/platform-browser';
import {CounterComponent} from "./counter.component";

describe('CounterComponent', () => {
  let component: CounterComponent
  let fixture: ComponentFixture<CounterComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    fixture = TestBed.createComponent(CounterComponent)
    component = fixture.componentInstance
  })

  it('should be created', () => {
    expect(component).toBeDefined()
  })

  it('should render counter property', () => {
    let num = 10
    component.counter = num
    fixture.detectChanges()
    let de = fixture.debugElement.query(By.css('.counter'))
    let el: HTMLElement = de.nativeElement
    expect(el.textContent).toContain(num.toString())
  })

})
