import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';
import { RegistratioService } from '../../services/registratio.service';
import { nameValidator, passwordMatch } from '../../validators/custom-validators';
import { CommonModule } from '@angular/common';
import { RegisterPayload } from '../../interfaces/auth';
import { Router, RouterModule } from '@angular/router';
import { validateHeaderValue } from 'node:http';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registrationForm !: FormGroup;
  constructor (private fb : FormBuilder, private service :RegistratioService, private route:Router){
    this.registrationForm = this.fb.group({
      firstName :['',[Validators.required,nameValidator]],
      lastName :['',[Validators.required, nameValidator]],
      email: ['', [Validators.required, Validators.email]],
      college: ['', [Validators.required,nameValidator, Validators.minLength(5)]],
      department: ['', [Validators.required]],
      yearOfStudy: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: ['', [Validators.required]],
      cnfrmPassword: ['', [Validators.required]]
    },{validators : passwordMatch})
  }

  onSubmit(){
    // if the form is valid

    if (this.registrationForm.valid){

      // passing the form values to our payload
      const payload : RegisterPayload = this.registrationForm.value;
      // get the result only when it subscribes
      this.service.register(payload).subscribe({
        next:(response)=>{
          alert('you have registered successfully please login')
          console.log('you have registered successfully please login',response)  // response comes from backend
          this.route.navigate(['/login'])
        },
        error:(errorMsg)=>{
          alert('Registration failed')
          console.error('registration failed',errorMsg.error) // finds the error, error comes from backend
        }
      });
      }else{
          this.registrationForm.markAllAsTouched();
      }
      this.registrationForm.reset()
    }

    get firstName(){
     return this.registrationForm.controls['firstName']
    }
    get lastName(){
      return this.registrationForm.controls['lastName']
    }
    get email(){
      return this.registrationForm.controls['email']
    }
    get college(){
      return this.registrationForm.controls['college']
    }
    get department(){
      return this.registrationForm.controls['department']
    }
    get year(){
      return this.registrationForm.controls['yearOfStudy']
    }
    get phone(){
      return this.registrationForm.controls['phone']
    }
    get password(){
      return this.registrationForm.controls['password']
    }
    get cnfrm(){
      return this.registrationForm.controls['cnfrmPassword']
    }
    }

