"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DashboardComponent = void 0;
var core_1 = require("@angular/core");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(appService) {
        this.appService = appService;
        this.menu = [];
        this.show = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getMenu().subscribe(function (result) {
            console.log(result);
            _this.menu = result.data;
        });
    };
    DashboardComponent.prototype.desactivar = function (x, id) {
        x.active = !x.active;
        this.appService.updateMenu(x, id).subscribe(function (result) {
            console.log(result);
        });
    };
    DashboardComponent.prototype.login = function () {
        this.show = true;
        console.log(this.show);
    };
    DashboardComponent.prototype["delete"] = function (x) {
        this.appService.deleMenu(x).subscribe(function (result) {
            console.log(result);
        });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
        })
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
