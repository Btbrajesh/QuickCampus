import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  
export class ApplicantService {

constructor(private http: HttpClient) { 
}

users(): Observable<any> {
   return this.http.get('https://jsonplaceholder.typicode.com/users');
  }


}