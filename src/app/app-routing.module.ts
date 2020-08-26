import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { AdminLoginComponent } from '../app/admin/login/login.component';
import { DashboardComponent } from '../app/admin/dashboard/dashboard.component';
import { EditMenuComponent } from './admin/menu/edit-menu/edit-menu.component';
import { AddMenuComponent } from './admin/menu/add-menu/add-menu.component';
import { ReviewsComponent } from './landing-page/reviews/reviews.component';
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cart', component: CartComponent },
  { path: '', component: LandingPageComponent },
  { path: 'admin', component: AdminLoginComponent },
  { path: 'edit/:id', component: EditMenuComponent},
  { path: 'add', component: AddMenuComponent},
  { path: 'review/:id', component: ReviewsComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
