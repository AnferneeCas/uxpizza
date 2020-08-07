import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cart = [];

  addToCart(data) {
    this.cart.push(data);
  }

  getCart() {
    return this.cart;
  }
}
