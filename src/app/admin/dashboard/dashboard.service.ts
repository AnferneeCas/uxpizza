import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DashboardPageService {
  constructor(protected http: HttpClient) {}

  getMenu() {
    return this.http.get('http://localhost:3030/menu');
  }

}
