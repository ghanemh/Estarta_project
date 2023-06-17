import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})

// https://mocki.io/v1/e161b9f5-726e-4d8b-af87-1b2a0fe4e93
export class ItemServiceService {
  constructor(private http: HttpClient) {}
  getItems(): Observable<any> {
    return this.http.get('https://mocki.io/v1/e161b9f5-726e-4d8b-af87-1b2a0fe4e93b');
  }
}
