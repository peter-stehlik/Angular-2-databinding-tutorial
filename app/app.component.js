"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        // Interpolation
        this.title = "Angular 2 Tutorial - Databinding examples";
        this.frontEnd = ["LESS", "Notepad++", "Twitter Bootstrap", "Foundation", "jQuery", "Angular2", "React"];
        this.detail = {
            name: "Twitter Bootstrap",
            excerpt: "",
            description: "Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",
            technologies: ["HTML", "CSS", "jQuery"]
        };
        // Property binding
        this.activeInput = true;
        this.imageSrc = "http://loremflickr.com/320/240";
        // Class & style binding
        this.isActive = true;
        // Two-way binding
        // take a look at app.module.ts, necessary to import FormsModule
        this.iValue = "";
    }
    // Event binding
    AppComponent.prototype.onClick = function () {
        alert("Button clicked!");
    };
    AppComponent.prototype.onKeyup = function () {
        console.log("key up event fired.");
    };
    AppComponent.prototype.onMouseover = function () {
        console.log("mouse over event fired.");
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            moduleId: module.id,
            templateUrl: "app.component.html",
            styles: ["\n        .active { font-weight: 700; }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map