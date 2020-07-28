import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: '', component: LandingPageComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
