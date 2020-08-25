"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ReviewsComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ReviewsComponent = /** @class */ (function () {
    function ReviewsComponent(service, router, route) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.name = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.email = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.review = new forms_1.FormControl('', [forms_1.Validators.required]);
        this.reviewsForm = new forms_1.FormGroup({
            name: this.name,
            email: this.email,
            review: this.review
        });
    }
    ReviewsComponent.prototype.ngOnInit = function () {
        //
    };
    ReviewsComponent.prototype.submitForm = function (item) {
        //TODO
        this.router.navigate(['/dashboard']);
    };
    ReviewsComponent.prototype.cancel = function () {
        this.router.navigate(['/dashboard']);
    };
    ReviewsComponent = __decorate([
        core_1.Component({
            selector: 'app-reviews',
            templateUrl: './reviews.component.html',
            styleUrls: ['./reviews.component.css']
        })
    ], ReviewsComponent);
    return ReviewsComponent;
}());
exports.ReviewsComponent = ReviewsComponent;
