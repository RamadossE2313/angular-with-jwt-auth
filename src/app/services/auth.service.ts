import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(param: any) : Observable<any>{
    return this.http.post("https://localhost:7001/api/Login", param);
  }
}
