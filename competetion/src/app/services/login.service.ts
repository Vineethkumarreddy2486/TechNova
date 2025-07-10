import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginInterface } from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http:HttpClient) { }
  private url = "http://127.0.0.1:8000/myapp/login/";
  login(payload:LoginInterface):Observable<any>{
    return this.http.post(this.url,payload)
  }
}
