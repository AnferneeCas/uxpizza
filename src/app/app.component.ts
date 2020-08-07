import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'uxExample';
  constructor(private router: Router) {}
  public admin = false;
  ngOnInit() {
    console.log(this.router.url);
    this.router.events.subscribe((val: any) => {
      if (this.router.url == '/admin' || this.router.url == '/dashboard') {
        this.admin = true;
      } else {
        this.admin = false;
      }
    });
  }
}
