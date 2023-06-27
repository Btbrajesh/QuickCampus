import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class CampusWalkInService {

  constructor(private http:HttpClient) { }

  getCampusWalkInList(): Observable<any>{
    return this.http.get<any>(environment.apiUrl +'/Campus/ManageCampus');
  }

}