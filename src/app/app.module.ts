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
import { FormsModule } from '@angular/forms';
import { AdminLoginComponent } from '../app/admin/login/login.component';
import { MenuComponent } from '../app/admin/menu/menu.component';
import { DashboardComponent } from '../app/admin/dashboard/dashboard.component';
import { Feathers } from './feathers.service';
import { ApiService } from './api.service';

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
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [Feathers, ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
