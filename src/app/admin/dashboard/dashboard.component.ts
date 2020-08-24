import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import * as _ from 'lodash';
import { Router } from '@angular/router';



@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit{
  public menu=[];
  public show = false;
  constructor(
    protected appService: AppService,
    protected router: Router
  ) {}

  ngOnInit(): void {
    this.appService.getMenu().subscribe((result: any) => {
      console.log(result);
      this.menu = result.data;
    });
  }

  desactivar(x:any,id){
   x.active= !x.active
    this.appService.updateMenu(x,id).subscribe((result: any) => {
      console.log(result);
    })
  }
  login() {
    this.show = true;
    console.log(this.show);
  }
  delete(x:any){
    this.appService.deleMenu(x).subscribe((result: any) => {
      console.log(result);
    })
  }
  agregar(){
    this.router.navigate(["/add"])
  }
  edit(id){
    this.router.navigate(["/edit",id])
  }

}
