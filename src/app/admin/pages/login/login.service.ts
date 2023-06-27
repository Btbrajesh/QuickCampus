import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
  
export class AccountService {

constructor(private http: HttpClient) { 
}

login(loginData:any): Observable<any> {
    debugger;
    const loginurl = this.http.post<any>(environment.apiUrl +'Account/AdminLogin',loginData);
    console.log(loginurl);
    return this.http.post(environment.apiUrl +'/Account/AdminLogin',loginData);
  }


}