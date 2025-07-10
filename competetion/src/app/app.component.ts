import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'competetion';
  constructor(private route:Router){}

  isLoggedIn=false;
  lastName='';
  firstname='';
  email='';


// to check whether the user is logged in or not
  ngOnInit(): void {
    this.checkLoginStatus()
  }

  checkLoginStatus(){
    const userData = localStorage.getItem('user')           // to get the user info
    if(userData){
      const user = JSON.parse(userData)                     // converts string into object
      this.isLoggedIn=true;
      this.lastName=user.lastName;
      this.firstname=user.firstName;
      this.email=user.email;
    }else{
      this.isLoggedIn=false;
      this.lastName='';
      this.firstname='';
      this.email='';
    }
  }
// if the user logout
  logout(){
    localStorage.removeItem('user');             // removes user when logout
    this.checkLoginStatus();
    this.route.navigate(['/home']);
  }

  goToRegister(){
    this.route.navigate(['/register'])
    console.log('you moved to registration page')
  }

  goToLogin(){
    this.route.navigate(['/login'])
  }

}
