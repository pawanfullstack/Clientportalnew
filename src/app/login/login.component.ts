import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Loginclass } from '../classes/Loginclass';
import { LoginserviceService } from '../services/loginservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private  loginservice: LoginserviceService) { }
  hide = true;
  formGroupLogin: FormGroup;
  ngOnInit() { 
    this.formGroupLogin = this.formBuilder.group({   
    'username': [null, Validators.required],
    'pwd': [null, [Validators.required]],
    
  });
}
Login() {  
  debugger
  const login = this.formGroupLogin.value;
   
      this.loginservice.ClientLogin(login).subscribe(  
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
