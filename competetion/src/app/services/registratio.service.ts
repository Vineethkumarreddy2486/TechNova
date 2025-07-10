import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterPayload } from '../interfaces/auth';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistratioService {

  constructor(private http:HttpClient) { }
  private url="http://127.0.0.1:8000/myapp/register/";
  
  register(payload : RegisterPayload):Observable<any>{
    return this.http.post(this.url,payload)
  }
};
