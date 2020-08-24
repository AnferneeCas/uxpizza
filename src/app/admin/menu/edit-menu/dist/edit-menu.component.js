"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EditMenuComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
//import { interface } from '...'
var EditMenuComponent = /** @class */ (function () {
    function EditMenuComponent(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.idPizza = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.namePizza = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.descriptionPizza = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.pricePizza = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.activePizza = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.editMenuForm = new forms_1.FormGroup({
            idPizza: this.idPizza,
            namePizza: this.namePizza,
            descriptionPizza: this.descriptionPizza,
            pricePizza: this.pricePizza,
            activePizza: this.activePizza
        });
    }
    EditMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getMenuItem(+this.route.snapshot.params["id"]).subscribe(function (data) {
            _this.menu = data;
        });
    };
    EditMenuComponent.prototype.submitForm = function (item) {
        var _this = this;
        item.idPizza = this.menu.idPizza;
        this.service.updateMenu(item, item.idPizza).subscribe(function (data) {
            _this.router.navigate(['/']);
        });
    };
    EditMenuComponent.prototype.cancel = function () {
        this.router.navigate(['/']);
    };
    EditMenuComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-menu',
            templateUrl: './edit-menu.component.html',
            styleUrls: ['./edit-menu.component.css']
        })
    ], EditMenuComponent);
    return EditMenuComponent;
}());
exports.EditMenuComponent = EditMenuComponent;
