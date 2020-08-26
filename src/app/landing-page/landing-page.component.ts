import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { CartService } from '../cart/cart.service';
import * as _ from 'lodash';
import { RouterModule, Routes } from '@angular/router';


declare var swal;
declare var uuid;
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  public menu = [];
  constructor(
    protected appService: AppService,
    protected cartService: CartService,
    
  ) {}

  ngOnInit(): void {
    this.appService.getMenu().subscribe((result: any) => {
      console.log(result);
      this.menu = result.data;
    });
  }

  addToCart(menu) {
    var data = _.cloneDeep(menu);
    data.qt = 1;
    data.id = uuid.v4();
    this.cartService.addToCart(data);
    swal.fire({ title: 'Listo', icon: 'success', text: 'Se agrego a carrito' });
  }
}
