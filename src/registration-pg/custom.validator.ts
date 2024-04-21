import { AbstractControl, ValidationErrors, FormGroup } from "@angular/forms";
export class Customvalidator{
    static spaceIdentifier(control:AbstractControl):ValidationErrors | null{
        let isIndex = control.value.indexOf(" ");
        if(isIndex<= 0){
            return null;
        }
        return {
            spaceError: true
        }
    }


    static capitalLetter(control:AbstractControl):ValidationErrors | null{
        let index = control.value.charCodeAt(0);
        if(index >= 65 && index <= 99){
            return null;
        }
        return {
            capitalError:true
        }
    }
}