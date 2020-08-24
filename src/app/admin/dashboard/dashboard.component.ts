import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import * as _ from 'lodash';



@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit{
  public menu=[];
  public show = false;
  constructor(
    protected appService: AppService
  ) {}

  ngOnInit(): void {
    this.appService.getMenu().subscribe((result: any) => {
      console.log(result);
      this.menu = result.data;
    });
  }

  desactivar(x:any,id){
   x.active= !x.active
    this.appService.desactivarMenu(x,id).subscribe((result: any) => {
      console.log(result);
    })
  }
  login() {
    this.show = true;
    console.log(this.show);
  }
  delete(x:any){
    this.appService.deletMenu(x).subscribe((result: any) => {
      console.log(result);
    })
  }
  

}
