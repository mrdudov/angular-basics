import {Directive, HostBinding, OnInit} from '@angular/core'

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit {
  @HostBinding('style.color') color: string | undefined

  ngOnInit(): void {
    this.color = '#aaa'
  }
}
