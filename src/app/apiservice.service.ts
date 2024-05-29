import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  apiUrl = "http://localhost:3000/users";
  apiUrl1 = "http://localhost:3000/data";
  apiUrl2 = "http://localhost:3000/take";
  constructor(private http: HttpClient) { }

  Searchdata(data: any) {
    return this.http.post(this.apiUrl, data);
  }

  take(data: any) {
    console.log(data);
    return this.http.post(this.apiUrl2, data);
  }

  insertdata(data: any) {
    return this.http.post(this.apiUrl1, data);
  }
}
