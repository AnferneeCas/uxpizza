"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        this.base_url = 'http://localhost:3030/';
        this.auth = null;
        var storageAuth = JSON.parse(localStorage.getItem('auth'));
        console.log(storageAuth);
        this.auth = storageAuth;
    }
    AppService.prototype.getMenu = function () {
        return this.http.get(this.base_url + 'menu');
    };
    AppService.prototype.getMenuItem = function (id) {
        return this.http.get(this.base_url + 'menu/' + id);
    };
    AppService.prototype.register = function (data) {
        return this.http.post(this.base_url + 'users', data);
    };
    AppService.prototype.setAuth = function (data) {
        console.log(data);
        this.auth = data;
        localStorage.setItem('auth', JSON.stringify(data));
    };
    AppService.prototype.isLogged = function () {
        var _a;
        if ((_a = this.auth) === null || _a === void 0 ? void 0 : _a.accessToken) {
            return true;
        }
        return false;
    };
    AppService.prototype.loginGithub = function () {
        window.location.href = 'http://localhost:3030/oauth/github';
    };
    AppService.prototype.login = function (data) {
        return this.http.post(this.base_url + 'authentication', data);
    };
    AppService.prototype.placeOrder = function (data) {
        return this.http.post(this.base_url + 'order', data);
    };
    AppService.prototype.addToMenu = function (data) {
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('auth')).accessToken
            })
        };
        return this.http.post(this.base_url + 'menu', data, httpOptions);
    };
    AppService.prototype.updateMenu = function (data, id) {
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('auth')).accessToken
            })
        };
        console.log(data.active);
        return this.http.put(this.base_url + 'menu/' + id, data, httpOptions);
    };
    AppService.prototype.deleMenu = function (id) {
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('auth')).accessToken
            })
        };
        return this.http["delete"](this.base_url + 'menu/' + id, httpOptions);
    };
    AppService.prototype.getUser = function () {
        return this.auth.user.email;
    };
    AppService.prototype.getEmail = function () {
        return this.auth.user.email;
    };
    AppService.prototype.isAdmin = function () {
        return this.auth.user.admin;
    };
    AppService.prototype.logOut = function () {
        localStorage.removeItem('auth');
    };
    AppService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
