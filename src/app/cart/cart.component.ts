import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public show = false;
  constructor(private cdRef: ChangeDetectorRef) {}
  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }
  ngOnInit(): void {}

  login() {
    this.show = true;
    console.log(this.show);
  }
}
