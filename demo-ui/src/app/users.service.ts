import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000';
  }

  public add(user){
    const url = `${this.baseUrl}/users`;
    return this.http.post<any>(url, user, {headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })});
  }
  public delete(id){
    const url = `${this.baseUrl}/users/${id}`;
    return this.http.delete(url);
  }
  public getAll(){
    const url = `${this.baseUrl}/users`;
    return this.http.get<any>(url, {headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })});
  }
  public update(id,user){
    const url = `${this.baseUrl}/users/${id}`;
    return this.http.patch<any>(url, user, {headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })});
  }
}
