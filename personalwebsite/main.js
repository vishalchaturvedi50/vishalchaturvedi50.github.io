(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"section-heading\">{{aboutMe.heading}}</h2>\n\n<section *ngFor=\"let item of aboutMe.sections\"><q>{{item}}</q></section>"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i\");\n/* You can add global styles to this file, and also import other style files */\nbody {\n  margin: 0px;\n  font-family: \"Roboto\", sans-serif;\n  scroll-behavior: smooth; }\n.flex {\n  display: flex; }\n.flex--row {\n  flex-direction: row; }\n.flex--column {\n  flex-direction: column; }\n.w-10 {\n  width: 10%; }\n.w-20 {\n  width: 20%; }\n.w-50 {\n  width: 50%; }\n.w-100 {\n  width: 100%; }\n.w-25 {\n  width: 25%; }\n.w-10,\n.w-20,\n.w-100,\n.w-50,\n.w-25 {\n  box-sizing: border-box; }\n.jc-space-around {\n  justify-content: space-around; }\n.jc-space-betweeen {\n  justify-content: space-between; }\n.jc-center {\n  justify-content: center; }\n.jc-flex-end {\n  justify-content: flex-end; }\n.al-center {\n  align-items: center; }\n.h-fit-content {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content; }\n.h-fill-available {\n  height: -webkit-fill-available; }\n.flex-wrap {\n  flex-wrap: wrap; }\n.white {\n  color: white; }\n.parallax {\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n.z-1 {\n  z-index: 1; }\n.section-heading {\n  font-size: 2.5em;\n  border-left: 6px solid #28c4ff;\n  padding-left: 0.5em;\n  font-weight: 300; }\n.padding-x {\n  padding: 1em; }\n@media only screen and (max-width: 768px) {\n  .w-sm-100 {\n    width: 100%; }\n  .w-sm-33 {\n    width: 33.33%; }\n  .w-sm-72 {\n    width: 72%; } }\n:host {\n  padding: 1em; }\nsection {\n  font-size: 22px;\n  color: grey;\n  padding: 1em;\n  text-align: justify;\n  font-style: italic; }\n@media only screen and (max-width: 768px) {\n  :host {\n    max-width: 100vw; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvRTpcXFByb2plY3RzIGFuZCBMZWFybmluZ1xccGVyc29uYWx3ZWJzaXRlL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL2Fib3V0L0U6XFxQcm9qZWN0cyBhbmQgTGVhcm5pbmdcXHBlcnNvbmFsd2Vic2l0ZS9zcmNcXGFwcFxcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSwwR0FBWTtBQUZaLDhFQUFBO0FBTUE7RUFDRSxXQUFXO0VBQ1gsaUNBQWlDO0VBQ2pDLHVCQUF1QixFQUFBO0FBR3pCO0VBQ0UsYUFBYSxFQUFBO0FBR2Y7RUFDRSxtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLHNCQUFzQixFQUFBO0FBR3hCO0VBQ0UsVUFBVSxFQUFBO0FBR1o7RUFDRSxVQUFVLEVBQUE7QUFHWjtFQUNFLFVBQVUsRUFBQTtBQUdaO0VBQ0UsV0FBVyxFQUFBO0FBR2I7RUFDRSxVQUFVLEVBQUE7QUFHWjs7Ozs7RUFLRSxzQkFBc0IsRUFBQTtBQUd4QjtFQUNFLDZCQUE2QixFQUFBO0FBRS9CO0VBQ0UsOEJBQThCLEVBQUE7QUFHaEM7RUFDRSx1QkFBdUIsRUFBQTtBQUd6QjtFQUNFLHlCQUF5QixFQUFBO0FBRzNCO0VBQ0UsbUJBQW1CLEVBQUE7QUFHckI7RUFDRSwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0UsOEJBQThCLEVBQUE7QUFHaEM7RUFDRSxlQUFlLEVBQUE7QUFHakI7RUFDRSxZQUFZLEVBQUE7QUFHZDtFQUNFLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHNCQUFzQixFQUFBO0FBR3hCO0VBQ0UsVUFBVSxFQUFBO0FBR1o7RUFDRSxnQkFBZ0I7RUFDaEIsOEJBaEdrQjtFQWlHbEIsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsWUFBWSxFQUFBO0FBR2Q7RUFDRTtJQUNFLFdBQVcsRUFBQTtFQUViO0lBQ0UsYUFBYSxFQUFBO0VBRWY7SUFDRSxVQUFVLEVBQUEsRUFDWDtBQ3BISDtFQUNFLFlBQVksRUFBQTtBQUdkO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0U7SUFDRSxnQkFBZ0IsRUFBQSxFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MTAwLDEwMGksMzAwLDMwMGksNDAwLDQwMGksNTAwLDUwMGksNzAwLDcwMGlcIik7XG5cbiRibHVlLWNvbnN0OiAjMjhjNGZmO1xuXG5ib2R5IHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZmxleC0tcm93IHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmZsZXgtLWNvbHVtbiB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi53LTEwIHtcbiAgd2lkdGg6IDEwJTtcbn1cblxuLnctMjAge1xuICB3aWR0aDogMjAlO1xufVxuXG4udy01MCB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi53LTEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udy0yNSB7XG4gIHdpZHRoOiAyNSU7XG59XG5cbi53LTEwLFxuLnctMjAsXG4udy0xMDAsXG4udy01MCxcbi53LTI1IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmpjLXNwYWNlLWFyb3VuZCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLmpjLXNwYWNlLWJldHdlZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uamMtY2VudGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5qYy1mbGV4LWVuZCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5hbC1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaC1maXQtY29udGVudCB7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG59XG5cbi5oLWZpbGwtYXZhaWxhYmxlIHtcbiAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xufVxuXG4uZmxleC13cmFwIHtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ud2hpdGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5wYXJhbGxheCB7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnotMSB7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5zZWN0aW9uLWhlYWRpbmcge1xuICBmb250LXNpemU6IDIuNWVtO1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkICRibHVlLWNvbnN0O1xuICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4ucGFkZGluZy14IHtcbiAgcGFkZGluZzogMWVtO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC53LXNtLTEwMCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnctc20tMzMge1xuICAgIHdpZHRoOiAzMy4zMyU7XG4gIH1cbiAgLnctc20tNzIge1xuICAgIHdpZHRoOiA3MiU7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMuc2Nzc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gIHBhZGRpbmc6IDFlbTtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGNvbG9yOiBncmV5O1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIDpob3N0IHtcclxuICAgIG1heC13aWR0aDogMTAwdnc7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.aboutMe = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["aboutMeConst"];
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex flex--column\">\r\n    <app-brand class=\"parallax\"></app-brand>\r\n    <app-about></app-about>\r\n    <app-techskill class=\"parallax\"></app-techskill>\r\n    <app-work></app-work>\r\n    <app-education class=\"parallax\"></app-education>\r\n    <app-hobby></app-hobby>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'personalwebsite';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _brand_brand_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./brand/brand.component */ "./src/app/brand/brand.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _techskill_techskill_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./techskill/techskill.component */ "./src/app/techskill/techskill.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./work/work.component */ "./src/app/work/work.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");
/* harmony import */ var _hobby_hobby_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hobby/hobby.component */ "./src/app/hobby/hobby.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _brand_brand_component__WEBPACK_IMPORTED_MODULE_5__["BrandComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                _techskill_techskill_component__WEBPACK_IMPORTED_MODULE_7__["TechskillComponent"],
                _work_work_component__WEBPACK_IMPORTED_MODULE_8__["WorkComponent"],
                _education_education_component__WEBPACK_IMPORTED_MODULE_9__["EducationComponent"],
                _hobby_hobby_component__WEBPACK_IMPORTED_MODULE_10__["HobbyComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/brand/brand.component.html":
/*!********************************************!*\
  !*** ./src/app/brand/brand.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\">\r\n\r\n</div>\r\n\r\n<div class=\"flex flex--column h-fill-available jc-space-betweeen\">\r\n    <!-- NAME -->\r\n    <h1 class=\"white banner-heading z-1\">VISHAL CHATURVEDI</h1>\r\n\r\n    <!--  ALL INCONS -->\r\n    <div class=\"flex flex--row jc-space-around z-1 icon-div\">\r\n        <div *ngFor=\"let items of icons\" class=\"w-10 h-fit-content flex jc-center\">\r\n            <a target=\"_blank\" [href]=\"items.link\"><img [src]=\"items.iconpath\" /></a>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/brand/brand.component.scss":
/*!********************************************!*\
  !*** ./src/app/brand/brand.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  max-height: 100vh;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 1em;\n  position: relative;\n  background-image: url('banner-bg.png'); }\n\n.banner-heading {\n  font-size: 6em;\n  font-weight: 300; }\n\n.banner-heading:hover {\n    text-decoration: underline;\n    -webkit-text-decoration-color: #28c4ff;\n            text-decoration-color: #28c4ff; }\n\nimg {\n  max-height: 5em; }\n\n.overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: #0c0c0c6e;\n  width: 100%;\n  height: 100%;\n  z-index: 0; }\n\n.icon-div:hover {\n  background-color: #00000075; }\n\n@media only screen and (max-width: 768px) {\n  :host {\n    background-position: right;\n    max-width: 100vw;\n    height: 100vh; }\n  .banner-heading {\n    font-size: 2.9em; }\n  .icon-div {\n    flex-wrap: wrap; }\n    .icon-div .w-10 {\n      width: 20%; }\n  img {\n    max-height: 3em; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnJhbmQvRTpcXFByb2plY3RzIGFuZCBMZWFybmluZ1xccGVyc29uYWx3ZWJzaXRlL3NyY1xcYXBwXFxicmFuZFxcYnJhbmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNDQUFtRCxFQUFBOztBQUdyRDtFQUNFLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFGbEI7SUFJSSwwQkFBMEI7SUFDMUIsc0NBQThCO1lBQTlCLDhCQUE4QixFQUFBOztBQUlsQztFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVLEVBQUE7O0FBR1o7RUFFSSwyQkFBMkIsRUFBQTs7QUFJL0I7RUFDRTtJQUNFLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsYUFBYSxFQUFBO0VBRWY7SUFDRSxnQkFBZ0IsRUFBQTtFQUVsQjtJQUNFLGVBQWUsRUFBQTtJQURqQjtNQUdJLFVBQVUsRUFBQTtFQUdkO0lBQ0UsZUFBZSxFQUFBLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYnJhbmQvYnJhbmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgbWF4LWhlaWdodDogMTAwdmg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9iYW5uZXItYmcucG5nXCIpO1xyXG59XHJcblxyXG4uYmFubmVyLWhlYWRpbmcge1xyXG4gIGZvbnQtc2l6ZTogNmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgJjpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogIzI4YzRmZjtcclxuICB9XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWF4LWhlaWdodDogNWVtO1xyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQ6ICMwYzBjMGM2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG5cclxuLmljb24tZGl2IHtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA3NTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICA6aG9zdCB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcclxuICAgIG1heC13aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuICAuYmFubmVyLWhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAyLjllbTtcclxuICB9XHJcbiAgLmljb24tZGl2IHtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIC53LTEwIHtcclxuICAgICAgd2lkdGg6IDIwJTtcclxuICAgIH1cclxuICB9XHJcbiAgaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDNlbTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/brand/brand.component.ts":
/*!******************************************!*\
  !*** ./src/app/brand/brand.component.ts ***!
  \******************************************/
/*! exports provided: BrandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandComponent", function() { return BrandComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



var BrandComponent = /** @class */ (function () {
    function BrandComponent() {
        this.icons = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["brandIconsConst"];
    }
    BrandComponent.prototype.ngOnInit = function () {
    };
    BrandComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-brand',
            template: __webpack_require__(/*! ./brand.component.html */ "./src/app/brand/brand.component.html"),
            styles: [__webpack_require__(/*! ./brand.component.scss */ "./src/app/brand/brand.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BrandComponent);
    return BrandComponent;
}());



/***/ }),

/***/ "./src/app/education/education.component.html":
/*!****************************************************!*\
  !*** ./src/app/education/education.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"section-heading\">Education</h2>\n\n<div class=\"flex flex--column w-50 w-sm-72 padding-x\">\n  <div class=\"flex flex--column\" *ngFor=\"let item of education\">\n    <h3 class=\"title\">{{item.title}}\n      <small>{{item.duration}}</small>\n    </h3>\n    <div class=\"chips-container\">\n      <span class=\"chips\" *ngFor=\"let chip of item.chipsData\">{{chip}}</span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/education/education.component.scss":
/*!****************************************************!*\
  !*** ./src/app/education/education.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  background-image: url('education.jpg');\n  min-height: 80vh;\n  padding: 1em; }\n\n.title {\n  font-size: 1.8em;\n  font-weight: 300;\n  margin-bottom: 0.2em; }\n\n.title small {\n    font-size: 0.8em; }\n\n.chips-container .chips {\n  margin: 0.3em 0.5em;\n  font-size: 1.2em;\n  padding: 0 0.5em;\n  background: #9be4ff7d;\n  font-weight: 300;\n  display: inline-block; }\n\n.chips-container .chips:nth-child(2n) {\n    background: #efc1ca; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWR1Y2F0aW9uL0U6XFxQcm9qZWN0cyBhbmQgTGVhcm5pbmdcXHBlcnNvbmFsd2Vic2l0ZS9zcmNcXGFwcFxcZWR1Y2F0aW9uXFxlZHVjYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBbUQ7RUFDbkQsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTs7QUFHZDtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsb0JBQW9CLEVBQUE7O0FBSHRCO0lBS0ksZ0JBQWdCLEVBQUE7O0FBSXBCO0VBRUksbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixxQkFBcUIsRUFBQTs7QUFQekI7SUFTTSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2VkdWNhdGlvbi5qcGdcIik7XHJcbiAgbWluLWhlaWdodDogODB2aDtcclxuICBwYWRkaW5nOiAxZW07XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjhlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuMmVtO1xyXG4gIHNtYWxsIHtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgfVxyXG59XHJcblxyXG4uY2hpcHMtY29udGFpbmVyIHtcclxuICAuY2hpcHMge1xyXG4gICAgbWFyZ2luOiAwLjNlbSAwLjVlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBwYWRkaW5nOiAwIDAuNWVtO1xyXG4gICAgYmFja2dyb3VuZDogIzliZTRmZjdkO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICY6bnRoLWNoaWxkKDJuKSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNlZmMxY2E7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/education/education.component.ts":
/*!**************************************************!*\
  !*** ./src/app/education/education.component.ts ***!
  \**************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
        this.education = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["educationConst"];
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.scss */ "./src/app/education/education.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/hobby/hobby.component.html":
/*!********************************************!*\
  !*** ./src/app/hobby/hobby.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"section-heading\">Interests</h3>\n\n<div class=\"flex flex--row flex-wrap tech-skill-div\">\n  <div *ngFor=\"let item of hoobies\" class=\"w-25 flex flex--column al-center\">\n    <img [src]=\"item\" />\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/hobby/hobby.component.scss":
/*!********************************************!*\
  !*** ./src/app/hobby/hobby.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  padding: 1em; }\n\nimg {\n  max-width: 45%;\n  height: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9iYnkvRTpcXFByb2plY3RzIGFuZCBMZWFybmluZ1xccGVyc29uYWx3ZWJzaXRlL3NyY1xcYXBwXFxob2JieVxcaG9iYnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxjQUFjO0VBQ2QsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9iYnkvaG9iYnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgcGFkZGluZzogMWVtO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIG1heC13aWR0aDogNDUlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/hobby/hobby.component.ts":
/*!******************************************!*\
  !*** ./src/app/hobby/hobby.component.ts ***!
  \******************************************/
/*! exports provided: HobbyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HobbyComponent", function() { return HobbyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



var HobbyComponent = /** @class */ (function () {
    function HobbyComponent() {
        this.hoobies = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["hobbyConst"];
    }
    HobbyComponent.prototype.ngOnInit = function () {
    };
    HobbyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hobby',
            template: __webpack_require__(/*! ./hobby.component.html */ "./src/app/hobby/hobby.component.html"),
            styles: [__webpack_require__(/*! ./hobby.component.scss */ "./src/app/hobby/hobby.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HobbyComponent);
    return HobbyComponent;
}());



/***/ }),

/***/ "./src/app/techskill/techskill.component.html":
/*!****************************************************!*\
  !*** ./src/app/techskill/techskill.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"section-heading\">Technical Skills</h1>\n\n<div class=\"flex flex--row flex-wrap tech-skill-div\">\n  <div *ngFor=\"let item of techImages\" class=\"w-20 w-sm-33\">\n    <img [src]=\"item.img\" />\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/techskill/techskill.component.scss":
/*!****************************************************!*\
  !*** ./src/app/techskill/techskill.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  padding: 1em;\n  min-height: 100vh;\n  background-image: url('tech1.jpg'); }\n\nimg {\n  max-height: 7em; }\n\n.tech-skill-div div {\n  margin: 2em 0em; }\n\n@media only screen and (max-width: 768px) {\n  :host {\n    /*   max-width: 100vw; */\n    background-position: right; }\n  img {\n    max-height: 5em; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVjaHNraWxsL0U6XFxQcm9qZWN0cyBhbmQgTGVhcm5pbmdcXHBlcnNvbmFsd2Vic2l0ZS9zcmNcXGFwcFxcdGVjaHNraWxsXFx0ZWNoc2tpbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtDQUErQyxFQUFBOztBQUdqRDtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFFSSxlQUFlLEVBQUE7O0FBSW5CO0VBQ0U7SUFDRSx3QkFBQTtJQUNBLDBCQUEwQixFQUFBO0VBRTVCO0lBQ0UsZUFBZSxFQUFBLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdGVjaHNraWxsL3RlY2hza2lsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3RlY2gxLmpwZ1wiKTtcclxufVxyXG5cclxuaW1nIHtcclxuICBtYXgtaGVpZ2h0OiA3ZW07XHJcbn1cclxuXHJcbi50ZWNoLXNraWxsLWRpdiB7XHJcbiAgZGl2IHtcclxuICAgIG1hcmdpbjogMmVtIDBlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICA6aG9zdCB7XHJcbiAgICAvKiAgIG1heC13aWR0aDogMTAwdnc7ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcclxuICB9XHJcbiAgaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDVlbTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/techskill/techskill.component.ts":
/*!**************************************************!*\
  !*** ./src/app/techskill/techskill.component.ts ***!
  \**************************************************/
/*! exports provided: TechskillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechskillComponent", function() { return TechskillComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



var TechskillComponent = /** @class */ (function () {
    function TechskillComponent() {
        this.techImages = [];
    }
    TechskillComponent.prototype.ngOnInit = function () {
        this.techImages = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["techSkillsConst"];
    };
    TechskillComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-techskill',
            template: __webpack_require__(/*! ./techskill.component.html */ "./src/app/techskill/techskill.component.html"),
            styles: [__webpack_require__(/*! ./techskill.component.scss */ "./src/app/techskill/techskill.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TechskillComponent);
    return TechskillComponent;
}());



/***/ }),

/***/ "./src/app/work/work.component.html":
/*!******************************************!*\
  !*** ./src/app/work/work.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"section-heading\">Work Experience</h2>\n\n<div class=\"flex flex--row flex-wrap\">\n  <div class=\"w-50 w-sm-100 flex flex--row flex-wrap padding-x\" *ngFor=\"let item of workExperience\">\n    <!-- IMAGE and title  -->\n    <div class=\"w-100 jc-space-betweeen al-center flex flex--row\">\n      <div class=\"w-100 flex flex--column jc-flex-end\">\n        <h3 class=\"title\">{{item.title}}</h3>\n        <span class=\"duration\">{{item.duration}}</span>\n      </div>\n      <img [src]=\"item.img\" />\n    </div>\n\n    <!-- TH -->\n    <ul>\n      <li class=\"desc-item\" *ngFor=\"let desc of item.descItems\">{{desc}}</li>\n    </ul>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/work/work.component.scss":
/*!******************************************!*\
  !*** ./src/app/work/work.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  padding: 1em; }\n\nimg {\n  max-height: 4em; }\n\n.title {\n  font-weight: 300;\n  font-size: 1.7em;\n  margin-bottom: 0.1em; }\n\n.duration {\n  font-weight: 300;\n  font-style: italic;\n  padding-right: 0.6em; }\n\n.desc-item {\n  font-size: 1.1em;\n  font-weight: 300;\n  margin: 0.5em 0em;\n  text-align: justify; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay9FOlxcUHJvamVjdHMgYW5kIExlYXJuaW5nXFxwZXJzb25hbHdlYnNpdGUvc3JjXFxhcHBcXHdvcmtcXHdvcmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvd29yay93b3JrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHBhZGRpbmc6IDFlbTtcclxufVxyXG5cclxuaW1nIHtcclxuICBtYXgtaGVpZ2h0OiA0ZW07XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDEuN2VtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuMWVtO1xyXG59XHJcblxyXG4uZHVyYXRpb24ge1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDAuNmVtO1xyXG59XHJcblxyXG4uZGVzYy1pdGVtIHtcclxuICBmb250LXNpemU6IDEuMWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbWFyZ2luOiAwLjVlbSAwZW07XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/work/work.component.ts":
/*!****************************************!*\
  !*** ./src/app/work/work.component.ts ***!
  \****************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



var WorkComponent = /** @class */ (function () {
    function WorkComponent() {
        this.workExperience = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["workExperienceConst"];
    }
    WorkComponent.prototype.ngOnInit = function () {
    };
    WorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-work',
            template: __webpack_require__(/*! ./work.component.html */ "./src/app/work/work.component.html"),
            styles: [__webpack_require__(/*! ./work.component.scss */ "./src/app/work/work.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WorkComponent);
    return WorkComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, aboutMeConst, techSkillsConst, workExperienceConst, educationConst, hobbyConst, brandIconsConst */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aboutMeConst", function() { return aboutMeConst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "techSkillsConst", function() { return techSkillsConst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "workExperienceConst", function() { return workExperienceConst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "educationConst", function() { return educationConst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hobbyConst", function() { return hobbyConst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brandIconsConst", function() { return brandIconsConst; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
var aboutMeConst = {
    heading: "About Me",
    sections: [
        "A Full Stack Web Developer with an Experience of over 4.5 Years, I hold a passion to develop flawless user\n  interfaces with cutting edge technologies and with Design Thinking as my main principle of work.Right from working\n  on Products which caters to Business(B2B), Enterprise(B2E) or Consumers(B2C) to being an SME in Gamification trends\n  I bring forward my thought leadership, functional knowledge and technological experience to the team I work with.\n",
        " When I am not working I love to travel and make some music. I have been into music for quite a while and\ntraveling is my new passion. If you are interested to know more about my work or even if you are interested to know\nmy traveling stories (not many though) you can reach me out over email."
    ]
};
var techSkillsConst = [
    { img: "./../assets/tech/html.png", desc: "" },
    { img: "./../assets/tech/css.png", desc: "" },
    { img: "./../assets/tech/js.png", desc: "" },
    { img: "./../assets/tech/git.png", desc: "" },
    { img: "./../assets/tech/angular.png", desc: "" },
    { img: "./../assets/tech/typescript.png", desc: "" },
    { img: "./../assets/tech/sass.png", desc: "" },
    { img: "./../assets/tech/bootstrap.png", desc: "" },
    { img: "./../assets/tech/materialdesign.png", desc: "" },
    { img: "./../assets/tech/predix.png", desc: "" },
    { img: "./../assets/tech/highcharts.png", desc: "" },
    { img: "./../assets/tech/d3.png", desc: "" },
    { img: "./../assets/tech/java.png", desc: "" },
    { img: "./../assets/tech/mongo.png", desc: "" },
    { img: "./../assets/tech/pg.png", desc: "" },
];
var workExperienceConst = [
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/General_Electric_logo.svg/500px-General_Electric_logo.svg.png",
        title: "Senior Software Enginner - Lead Professional",
        duration: "(January 2018 - Present)",
        descItems: [
            "Work as a Full stack developer for Infosys Enterprise Gamification Platform (iEGP) and Infosys Enterprise Cognitive Platform (iECP).",
            "Work on REST API's development with microservice architecture principle. ",
            "Work as an Individual Contributor to solutionize No SQL based DB for iEGP along with architects.",
            "Conceptualize future roadmap of the product with help of various POC's and POV's",
            "Lead a team of 3 UI Developer alongwith user story and task management. ",
            "Work as an SME in Gamification to provide clients with various solutions towards their mundane processes."
        ]
    },
    {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/2000px-Infosys_logo.svg.png",
        title: "Senior Systems Engineer",
        duration: "(Sep 2014 - January 2018)",
        descItems: [
            "Work as a Full stack developer for Infosys Enterprise Gamification Platform (iEGP) and Infosys Enterprise Cognitive Platform (iECP).",
            "Work on REST API's development with microservice architecture principle. ",
            "Work as an Individual Contributor to solutionize No SQL based DB for iEGP along with architects.",
            "Conceptualize future roadmap of the product with help of various POC's and POV's",
            "Lead a team of 3 UI Developer alongwith user story and task management. ",
            "Work as an SME in Gamification to provide clients with various solutions towards their mundane processes."
        ]
    }
];
var educationConst = [
    {
        title: "Bachelor of Technology | Hindustan Institute of Technology and Management, UPTU",
        duration: "August 2010 - May 2014",
        chipsData: [
            "Head college cultural society", "Drummer",
            "Member and later head of event management group",
            "Campus Ambassador TechKriti'14 IIT Kanpur"
        ]
    },
    {
        title: "Senior Secondary & Secondary Examinations | M.M. Sr. Sec. Public School CBSE",
        duration: "April 2007 - March 2010",
        chipsData: [
            "Head music and event club", "Member Debate Club "
        ]
    }
];
var hobbyConst = [
    "./../assets/hobby/re.png",
    "./../assets/hobby/music.png",
    "./../assets/hobby/movies.png",
    "../assets/hobby/book.png",
];
var brandIconsConst = [
    { iconpath: "./../assets/icons/linkedin.png", link: "https://www.linkedin.com/in/vishal-chaturvedi-916b1478/" },
    { iconpath: "./../assets/icons/github.png", link: "https://github.com/vishalchaturvedi50" },
    { iconpath: "./../assets/icons/quora.png", link: "https://vishalchaturvedi50.quora.com/" },
    { iconpath: "./../assets/icons/gmail.png", link: "mailto:vishalchaturvedi50@gmail.com" },
    { iconpath: "./../assets/icons/facebook.png", link: "https://www.facebook.com/chaturvedi.vishal4" }
];


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Projects and Learning\personalwebsite\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map