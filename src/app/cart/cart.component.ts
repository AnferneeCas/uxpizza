import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { AppService } from '../app.service';
import { CartService } from '../cart/cart.service';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

declare var swal;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})

export class CartComponent implements OnInit {

  public show = false;
  public show1= true;
  public cart = [];
  
  //Formulario
  
  //Input
  address: FormControl;
  addressForm: FormGroup;

  constructor(private cdRef: ChangeDetectorRef, protected appService: AppService,protected cartService: CartService,protected router: Router) {
      this.address = new FormControl('', [Validators.required])

      this.addressForm = new FormGroup({
        address: this.address
      })

  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }
  
  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    console.log(this.cart)
  }
  isdirty(){
    return this.show1
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

  sendOrder(item) {
    var data: any = {
      cart: this.cart,
    };
    data.user = this.appService.getUser();
    data.total=this.getTotal()
    data.direccion= item.address

    if(this.address.dirty){
      this.appService.placeOrder(data).subscribe((res) => {
        this.cart = [];
        this.cartService.cart=[]
        this.router.navigate(["/"])
        swal.fire({
          title: 'Listo',
          icon: 'success',
          text: 'Gracias por tu compra',
        });
      });
    }else{
      swal.fire({
        title: 'Error',
        icon: 'error',
        text: 'Nos hace falta tu direccion',
      });
    }
    
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
