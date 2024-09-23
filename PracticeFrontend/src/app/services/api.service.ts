import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:7060/api/persons';
  constructor(private http: HttpClient) {}

  createPerson(person: any): Observable<any> {
    return this.http.post(this.apiUrl, person);
  }
}