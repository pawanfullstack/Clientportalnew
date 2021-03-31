import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs'; 
import { Loginclass } from '../classes/Loginclass';
import { Registerclass } from '../classes/Registerclass';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  url = 'https://localhost:44355/Api/User';  
  constructor(private http: HttpClient) { }

ClientLogin(loginclass: Loginclass): Observable<any> {  
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
  return this.http.post<Loginclass>(this.url + '/UserLogin',  
  loginclass, httpOptions);  
}
Register(registerclass: Registerclass): Observable<any> {  
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
  return this.http.post<Registerclass>(this.url + '/UserRegistration',  
  registerclass, httpOptions);  
}
}