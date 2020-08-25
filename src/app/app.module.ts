import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { LiveChatComponent } from './live-chat/live-chat.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from '../app/admin/login/login.component';
import { MenuComponent } from '../app/admin/menu/menu.component';
import { DashboardComponent } from '../app/admin/dashboard/dashboard.component';
import { Feathers } from './feathers.service';
import { ApiService } from './api.service';
import { AddMenuComponent } from './admin/menu/add-menu/add-menu.component';
import { EditMenuComponent } from './admin/menu/edit-menu/edit-menu.component';
import { ReviewsComponent } from './landing-page/reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    CartComponent,
    LoginComponent,
    LiveChatComponent,
    AdminLoginComponent,
    MenuComponent,
    DashboardComponent,
    AddMenuComponent,
    EditMenuComponent,
    ReviewsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [Feathers, ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
