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
var EditMenuComponent = /** @class */ (function () {
    function EditMenuComponent(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.name = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.description = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.price = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.editMenuForm = new forms_1.FormGroup({
            // id: this.menu.id,
            name: this.name,
            description: this.description,
            price: this.price
        });
    }
    EditMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getMenuItem(+this.route.snapshot.params["id"]).subscribe(function (data) {
            _this.menu = data;
            console.log(data);
        });
        this.editMenuForm.controls['name'].setValue(this.menu.name);
        this.editMenuForm.controls['description'].setValue(this.menu.description);
        this.editMenuForm.controls['price'].setValue(this.menu.price);
    };
    EditMenuComponent.prototype.submitForm = function (item) {
        var _this = this;
        item.id = this.menu.id;
        item.active = this.menu.active;
        this.service.updateMenu(item, item.id).subscribe(function (data) {
            _this.router.navigate(['/dashboard']);
        });
    };
    EditMenuComponent.prototype.cancel = function () {
        this.router.navigate(['/dashboard']);
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
