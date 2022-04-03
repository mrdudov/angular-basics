import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ColorDirective } from './color.directive';

@Component({
  template: `
    <p appColor="yellow">text 1</p>
    <p appColor>text 2</p>
  `
})
class HoscComponent {}

describe('ColorDirective', () => {

  let fixture: ComponentFixture<HoscComponent>
  
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ HoscComponent, ColorDirective ],
      schemas:      [ CUSTOM_ELEMENTS_SCHEMA ]
    }).createComponent(HoscComponent)

    fixture.detectChanges(); // initial binding
  });

  // it('should create an instance', () => {
  //   const directive = new ColorDirective(null);
  //   expect(directive).toBeTruthy();
  // });

  it('should apply input color', () => {
    let de = fixture.debugElement.queryAll(By.css('p'))[0]
    expect(de.nativeElement.style.backgroundColor).toBe('yellow')
  })

  it('should apply default color', () => {
    let de = fixture.debugElement.queryAll(By.css('p'))[1]
    let derective = de.injector.get(ColorDirective)
    expect(de.nativeElement.style.backgroundColor).toBe(derective.defaultColor)
  })

});
