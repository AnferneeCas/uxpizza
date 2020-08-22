import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(public appService: AppService) {}

  ngOnInit(): void {}

  logOut() {
    this.appService.logOut();
    window.location.reload();
  }
}
