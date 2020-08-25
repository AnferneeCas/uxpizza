import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { AppService } from '../app.service';
import { CartService } from '../cart/cart.service';
import { RouteConfigLoadEnd, Router } from '@angular/router';
declare var swal;
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public show = false;
  public cart = [];
  constructor(
    private cdRef: ChangeDetectorRef,
    protected appService: AppService,
    protected cartService: CartService,
    protected router: Router
  ) {}
  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }
  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

  ngOnChanges() {
    this.cart = this.cartService.getCart();
  }
  login() {
    this.show = true;
    console.log(this.show);
  }

  isLogged() {
    return this.appService.isLogged();
  }

  getTotal() {
    var total = 0;
    for (let index = 0; index < this.cart.length; index++) {
      const menu = this.cart[index];

      total += menu.price * menu.qt;
    }
    return total;
  }

  sendOrder() {
    console.log('dfasdfa');
    var data: any = {
      cart: this.cart,
    };
    data.user = this.appService.getUser();
    console.log(data);
    this.appService.placeOrder(data).subscribe((res) => {
      this.cart = [];
      swal.fire({
        title: 'Listo',
        icon: 'success',
        text: 'Gracias por tu compra',
      });
      
    });
  }

  delete(id) {
    console.log(this.cart);
    for (let index = 0; index < this.cart.length; index++) {
      const menu = this.cart[index];

      if (menu.id == id) {
        this.cart.splice(index, 1);
        break;
      }
    }
  }

  getEmail() {
    return this.appService.getEmail();
  }
}
