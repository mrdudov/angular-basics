import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, FormControl, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";

export class AppValidators {
    static restrictedEmails(control: FormControl): ({[key: string]: boolean} | null ) {
        if (['test@mail.ru', 'example@mail.ru'].includes(control.value)) {
            return {
                restrictedEmail: true
            }
        }
        return null
    }

    static uniqueEmail(control: FormControl): Promise<({[key: string]: boolean} | null )> | Observable<({[key: string]: boolean} | null )> {
        return new Promise(resolve => {
            setTimeout(() => {
                if (control.value === 'async@mail.ru') {
                    resolve({
                        uniqueEmail: true
                    })
                } else {
                    resolve(null)
                }
            }, 1000)
        })
    }
}

@Injectable({ providedIn: 'root' })
export class AppAsyncValidators implements AsyncValidator {
    
    validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        return new Promise(resolve => {
            setTimeout(() => {
                if (control.value === 'async@mail.ru') {
                    resolve({
                        uniqueEmail: true
                    })
                } else {
                    resolve(null)
                }
            }, 1000)
        })
    }

}
