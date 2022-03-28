import { FormControl } from "@angular/forms";

export class AppValidators {
    static restrictedEmails(control: FormControl): ({[key: string]: boolean} | null ) {
        if (['test@mail.ru', 'example@mail.ru'].includes(control.value)) {
            return {
                restrictedEmail: true
            }
        }
        return null
    }
}