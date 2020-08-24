import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public show = false;
  
  constructor(public appService: AppService) {}

  ngOnInit(): void {}

  logOut() {
    this.appService.logOut();
    window.location.reload();
  }
  isLogged() {
    return this.appService.isLogged();
  }
  login() {
    this.show = true;
    console.log(this.show);
  }

}
