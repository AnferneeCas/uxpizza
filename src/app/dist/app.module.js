"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var landing_page_component_1 = require("./landing-page/landing-page.component");
var navbar_component_1 = require("./navbar/navbar.component");
var cart_component_1 = require("./cart/cart.component");
var app_routing_module_1 = require("./app-routing.module");
var login_component_1 = require("./login/login.component");
var live_chat_component_1 = require("./live-chat/live-chat.component");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var login_component_2 = require("../app/admin/login/login.component");
var menu_component_1 = require("../app/admin/menu/menu.component");
var dashboard_component_1 = require("../app/admin/dashboard/dashboard.component");
var feathers_service_1 = require("./feathers.service");
var api_service_1 = require("./api.service");
var add_menu_component_1 = require("./admin/menu/add-menu/add-menu.component");
var edit_menu_component_1 = require("./admin/menu/edit-menu/edit-menu.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                landing_page_component_1.LandingPageComponent,
                navbar_component_1.NavbarComponent,
                cart_component_1.CartComponent,
                login_component_1.LoginComponent,
                live_chat_component_1.LiveChatComponent,
                login_component_2.AdminLoginComponent,
                menu_component_1.MenuComponent,
                dashboard_component_1.DashboardComponent,
                add_menu_component_1.AddMenuComponent,
                edit_menu_component_1.EditMenuComponent,
            ],
            imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, http_1.HttpClientModule, forms_1.FormsModule, forms_1.ReactiveFormsModule],
            providers: [feathers_service_1.Feathers, api_service_1.ApiService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
