import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public base_url = 'http://localhost:3030/';
  constructor(protected http: HttpClient) {}
  public auth = null;
  getMenu() {
    return this.http.get(this.base_url + 'menu');
  }

  register(data) {
    return this.http.post(this.base_url + 'users', data);
  }

  setAuth(data) {
    this.auth = data;
  }

  isLogged() {
    if (this.auth?.accessToken) {
      return true;
    }
    return false;
  }

  loginGithub() {
    window.location.href = 'http://localhost:3030/oauth/github';
  }
  login(data) {
    return this.http.post(this.base_url + 'authentication', data);
  }

  placeOrder(data) {
    return this.http.post(this.base_url + 'order', data);
  }

  addToMenu(data) {
    return this.http.post(this.base_url + 'menu', data);
  }

  getEmail() {
    return this.auth.user.email;
  }

  isAdmin() {
    return this.auth.user.admin;
  }
}
