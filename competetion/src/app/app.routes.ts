import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { StudentsComponent } from './pages/students/students.component';
import { SubmitProjectsComponent } from './pages/submit-projects/submit-projects.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    { path :'home',component:HomeComponent },
    { path :'login', component:LoginComponent },
    { path :'register', component:RegisterComponent },
    { path :'dashboard', component:DashboardComponent },
    { path :'projects', component:ProjectsComponent },
    { path :'students', component:StudentsComponent },
    { path : 'submitprojects', component:SubmitProjectsComponent}
];
