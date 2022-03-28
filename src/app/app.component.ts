import {Component, OnInit} from '@angular/core'
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  form?: FormGroup
  
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email, 
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      address: new FormGroup({
        country: new FormControl('ru', Validators.required),
        city: new FormControl('', Validators.required)
      }),
      skills: new FormArray([])
    })  
  }

  submit() {
      console.log('form: ', this.form); 
      const formData = {...this.form?.value}
      console.log('value: ', formData)
  }

  setCaital() {
    const cityKey = (this.form?.get('address')?.get('country')?.value).toString()
    let city = ''

    if (cityKey === 'ru') {
      city = 'Москва'
    } else if (cityKey === 'ua') {
      city = 'Киев'
    } else if (cityKey === 'by') {
      city = 'Минск'
    }
    this.form?.patchValue({
      address: {
        city: city
      }
    }) 
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    // (<FormArray>this.form?.get('skills')).push()
    (this.form?.get('skills') as FormArray).push(control)
  }

  getControls() {
    return (this.form!.get('skills') as FormArray).controls;
  }
}
