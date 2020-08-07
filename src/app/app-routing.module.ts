import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { AdminLoginComponent } from '../app/admin/login/login.component';
import { DashboardComponent } from '../app/admin/dashboard/dashboard.component';
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cart', component: CartComponent },
  { path: '', component: LandingPageComponent },
  { path: 'admin', component: AdminLoginComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
