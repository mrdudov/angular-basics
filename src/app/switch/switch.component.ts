import { Component, forwardRef, OnInit, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SwitchComponent),
  multi: true
}

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  providers: [VALUE_ACCESSOR]
})
export class SwitchComponent implements ControlValueAccessor {

  state = 'off'

  private onchange = (value: any) => {}

  setState(state: string) {
    this.state = state

    this.onchange(this.state)
  }

  writeValue(state: string): void {
    this.state = state
  }
  registerOnChange(fn: any): void {
    this.onchange = fn
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState(isDisabled: boolean): void {

  }

}
