import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Loginclass } from '../classes/Loginclass';
import { LoginserviceService } from '../services/loginservice.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formGroupRegister: FormGroup;
  constructor(private formBuilder: FormBuilder, private  loginservice: LoginserviceService) { }

  ngOnInit(){
    this.formGroupRegister = this.formBuilder.group({   
      'username': [null, Validators.required],
      'pwd': [null, [Validators.required]],
      // 'confirmpwd': [null, [Validators.required]],
      'firstname': [null, [Validators.required]],
      'lastname': [null, [Validators.required]],
      'email': [null, [Validators.required]],
      'mobile': [null, [Validators.required]]
   })
  }
  Register() {  
    debugger
    const register = this.formGroupRegister.value;     
        this.loginservice.Register(register).subscribe(  
          suc => {
            debugger
            if(suc.status=="Success") {
                    
                alert(suc.result);        
            }  
             else           
             alert(suc.result);    
        },
        err => {
          debugger
            console.log(err );
        }
        
        );
      }
}
