import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getUserByUsername(username: string): Observable<any> {
    return this.http.get('http://localhost:3000/users/' + username)
  }
  getPosts(): Observable<any> {
    return this.http.get('http://localhost:3000/posts/')
  }
}
