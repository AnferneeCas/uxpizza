import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public base_url = 'http://localhost:3030/';
  constructor(protected http: HttpClient) {
    var storageAuth: any = JSON.parse(localStorage.getItem('auth'));
    console.log(storageAuth);
    this.auth = storageAuth;
  }
  public auth = null;
  getMenu() {
    return this.http.get(this.base_url + 'menu');
  }

  getMenuItem(id){
    return this.http.get(this.base_url + 'menu/'+ id);
  }

  register(data) {
    return this.http.post(this.base_url + 'users', data);
  }

  setAuth(data) {
    console.log(data);
    this.auth = data;
    localStorage.setItem('auth', JSON.stringify(data));
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
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('auth')).accessToken
    })
    };
    console.log(data)
    return this.http.post(this.base_url + 'menu', data, httpOptions);
  }

  updateMenu(data,id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('auth')).accessToken
    })
    };
    console.log(data.active)
    return this.http.put(this.base_url + 'menu/'+id, data, httpOptions);
  }

  deleMenu(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('auth')).accessToken
    })
    };
    return this.http.delete(this.base_url + 'menu/'+id , httpOptions)
  }

  getUser() {
    return this.auth.user.email;
  }
  getEmail() {
    return this.auth.user.email;
  }

  isAdmin() {
    return this.auth.user.admin;
  }
  logOut() {
    localStorage.removeItem('auth');
  }
}
