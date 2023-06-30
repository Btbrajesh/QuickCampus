import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        debugger;
        return this.http.get<any[]>(`${environment.apiUrl}/users`);
    }

    getById(id: number) {
        debugger;
        return this.http.get<any>(`${environment.apiUrl}/users`);
    }
}