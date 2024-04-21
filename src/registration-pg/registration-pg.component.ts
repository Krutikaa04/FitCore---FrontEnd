import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customvalidator } from './custom.validator';

@Component({
  selector: 'app-registration-pg',
  templateUrl: './registration-pg.component.html',
  styleUrls: ['./registration-pg.component.scss']
})
export class RegistrationPgComponent {

registerForm:FormGroup = new FormGroup({

})  
  constructor(private FB:FormBuilder){
    this.registerForm = FB.group({
      password:['',[Validators.required, Validators.minLength(8), Customvalidator.spaceIdentifier]],
      username: ["",[Validators.required,Validators.minLength(3), Customvalidator.capitalLetter]],
      userEmail: ["",[Validators.required, Validators.email]],
      contact: ["",[Validators.required]]
    })
  }

  get userEmail(){
    return this.registerForm.get("userEmail")
  }
  
  get password(){
    return this.registerForm.get("password");
  }

  get username(){
    return this.registerForm.get("username")
  }

  get contact(){
    return this.registerForm.get("contact")
  }

  

}
