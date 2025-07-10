import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { LoginInterface } from '../../interfaces/auth';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})


export class LoginComponent {

// form 

loginForm !: FormGroup;
constructor(private fb:FormBuilder,private route:Router,private service:LoginService,private appcomponent:AppComponent){
  this.loginForm = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
  })
}

public errorMessage : string='';
public loginError : boolean=false;
onSubmit(){
  
  if(this.loginForm.valid){
    const payload:LoginInterface=this.loginForm.value;
    this.service.login(payload).subscribe({
      next:(response)=>{
        this.loginError=false;
        console.log("Login successfull",response)

        // storing the user data                                        // user can be any key and object you are passing is the value
        localStorage.setItem('user',JSON.stringify({                    // JSON.stringfy() converts the object into string to store
          email:response.email,
          lastName:response.lastName,
          firstName:response.firstName
        }))

        // immediately updates navbar status
        this.appcomponent.checkLoginStatus();
        this.route.navigate(['/dashboard'])
      },
      error:(err)=>{
        console.log('Login Failed',err.error)
        this.loginError=true;
        this.errorMessage=err.error?.error;
      }
    })
  }else{
    this.loginForm.markAllAsTouched();      // makes all fields touched
  }
  this.loginForm.reset();                   // resets the form
}

// to make the eye icon functional
showPassword = false;
togglePassword() {
  this.showPassword = !this.showPassword;
}


// handling errors from scripts instead of from html

emailError(){
  const control=this.email
  if(control?.invalid && control?.touched){
    if(control?.errors?.['required']){
      return "required"
    }
    if(control?.errors?.['email']){
      return "invalid format"
    }
  }
  return null;
} 

passwordError() : string | null{
  const control = this.password
  if(control?.touched && control?.invalid){
    return "required"
  }
  return null;
}

// shortcuts to access fields
get email(){
  return this.loginForm.controls['email']
}
get password(){
  return this.loginForm.controls['password']
}
}
