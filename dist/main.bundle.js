webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__start_start_component__ = __webpack_require__("../../../../../src/app/start/start.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__end_turn_end_turn_component__ = __webpack_require__("../../../../../src/app/end-turn/end-turn.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__game_over_game_over_component__ = __webpack_require__("../../../../../src/app/game-over/game-over.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    {
        path: 'main/:name',
        component: __WEBPACK_IMPORTED_MODULE_3__main_main_component__["a" /* MainComponent */]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__start_start_component__["a" /* StartComponent */]
    },
    {
        path: 'end_turn',
        component: __WEBPACK_IMPORTED_MODULE_5__end_turn_end_turn_component__["a" /* EndTurnComponent */]
    },
    {
        path: 'end_game',
        component: __WEBPACK_IMPORTED_MODULE_6__game_over_game_over_component__["a" /* GameOverComponent */]
    },
    { path: 'start', redirectTo: '/', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes, {
                    enableTracing: false,
                }),
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\" >\n<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api50x15_service__ = __webpack_require__("../../../../../src/app/services/api50x15.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data50x15_service__ = __webpack_require__("../../../../../src/app/services/data50x15.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_api50x15_service__["a" /* Api50x15Service */], __WEBPACK_IMPORTED_MODULE_2__services_data50x15_service__["a" /* Data50x15Service */]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_pregunta_pregunta_component__ = __webpack_require__("../../../../../src/app/main/pregunta/pregunta.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__start_start_component__ = __webpack_require__("../../../../../src/app/start/start.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__end_turn_end_turn_component__ = __webpack_require__("../../../../../src/app/end-turn/end-turn.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__main_comodines_comodines_component__ = __webpack_require__("../../../../../src/app/main/comodines/comodines.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__main_popup_google_popup_google_component__ = __webpack_require__("../../../../../src/app/main/popup-google/popup-google.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__start_player_menu_player_menu_component__ = __webpack_require__("../../../../../src/app/start/player-menu/player-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__game_over_game_over_component__ = __webpack_require__("../../../../../src/app/game-over/game-over.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_7__main_pregunta_pregunta_component__["a" /* PreguntaComponent */],
                __WEBPACK_IMPORTED_MODULE_8__start_start_component__["a" /* StartComponent */],
                __WEBPACK_IMPORTED_MODULE_9__end_turn_end_turn_component__["a" /* EndTurnComponent */],
                __WEBPACK_IMPORTED_MODULE_10__main_comodines_comodines_component__["a" /* ComodinesComponent */],
                __WEBPACK_IMPORTED_MODULE_11__main_popup_google_popup_google_component__["a" /* PopupGoogleComponent */],
                __WEBPACK_IMPORTED_MODULE_12__start_player_menu_player_menu_component__["a" /* PlayerMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_13__game_over_game_over_component__["a" /* GameOverComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ApplicationInitStatus */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/end-turn/end-turn.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/end-turn/end-turn.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <ul>\n    <li *ngFor=\"let points of players_points\">\n      <p>{{points.name}} {{points.points}}</p>\n    </li>\n  </ul>\n</div>\n<button (click)=\"onClickMe()\">Continue</button>\n"

/***/ }),

/***/ "../../../../../src/app/end-turn/end-turn.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EndTurnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api50x15_service__ = __webpack_require__("../../../../../src/app/services/api50x15.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data50x15_service__ = __webpack_require__("../../../../../src/app/services/data50x15.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EndTurnComponent = (function () {
    function EndTurnComponent(service_api50x15, service_data50x15, router) {
        this.service_api50x15 = service_api50x15;
        this.service_data50x15 = service_data50x15;
        this.router = router;
        this.players_points = [];
    }
    EndTurnComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service_api50x15.getPlayersPoints()
            .subscribe(function (value) {
            var new_player_points = [];
            for (var player in value['players_points']) {
                console.log(player);
                new_player_points.push({ 'name': player, 'points': value['players_points'][player]['points'] });
            }
            _this.players_points = new_player_points;
            _this.service_data50x15.setPlayersPoints(new_player_points);
        });
    };
    EndTurnComponent.prototype.onClickMe = function () {
        var _this = this;
        this.service_api50x15.postNextLvl()
            .subscribe(function (value) {
            _this.service_data50x15.nextTurn();
            if (value['reason'] === 'OK') {
                if (value['game_ends'] === false) {
                    var next_player = _this.service_data50x15.getNextPlayer();
                    _this.router.navigateByUrl('/main/' + next_player, { skipLocationChange: true });
                    // window.location.reload();
                }
                else {
                    console.log('Game Over');
                    // this.router.navigateByUrl('/start');
                }
            }
            else {
                console.log('Turn not ends');
            }
        });
    };
    EndTurnComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-end-turn',
            template: __webpack_require__("../../../../../src/app/end-turn/end-turn.component.html"),
            styles: [__webpack_require__("../../../../../src/app/end-turn/end-turn.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api50x15_service__["a" /* Api50x15Service */],
            __WEBPACK_IMPORTED_MODULE_3__services_data50x15_service__["a" /* Data50x15Service */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], EndTurnComponent);
    return EndTurnComponent;
}());



/***/ }),

/***/ "../../../../../src/app/game-over/game-over.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/game-over/game-over.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Game Over</h1>\n<div class=\"row\">\n  <table class=\"table table-striped table-sm close col-md-offset-3 col-md-6\">\n    <tr *ngFor=\"let player of players_points\" class=\"row\">\n      <td>{{player.name}}</td>\n      <td>{{player.points}}</td>\n    </tr>\n  </table>\n</div>\n<button (click)=\"homeButton()\">Go Home</button>\n<button (click)=\"restartButton()\">Restart</button>\n"

/***/ }),

/***/ "../../../../../src/app/game-over/game-over.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameOverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api50x15_service__ = __webpack_require__("../../../../../src/app/services/api50x15.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data50x15_service__ = __webpack_require__("../../../../../src/app/services/data50x15.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GameOverComponent = (function () {
    function GameOverComponent(service_api50x15, service_data50x15, router) {
        this.service_api50x15 = service_api50x15;
        this.service_data50x15 = service_data50x15;
        this.router = router;
        this.players_points = [];
    }
    GameOverComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service_api50x15.getPlayersPoints()
            .subscribe(function (value) {
            var new_player_points = [];
            for (var player in value['players_points']) {
                console.log(player);
                new_player_points.push({ 'name': player, 'points': value['players_points'][player]['points'] });
            }
            _this.players_points = new_player_points;
            _this.service_data50x15.setPlayersPoints(new_player_points);
        });
    };
    GameOverComponent.prototype.homeButton = function () {
        this.router.navigateByUrl('/start', { skipLocationChange: true });
    };
    GameOverComponent.prototype.restartButton = function () {
        var _this = this;
        var all_players = this.service_data50x15.getAllPlayer();
        this.service_api50x15.postStart(all_players)
            .subscribe(function (data) {
            console.log(data);
            _this.service_api50x15.postNextLvl()
                .subscribe(function (value) {
                console.log(all_players);
                _this.service_data50x15.startGame(all_players);
                var next_player = _this.service_data50x15.getNextPlayer();
                console.log(next_player);
                _this.router.navigateByUrl('/main/' + next_player, { skipLocationChange: true });
            });
        });
    };
    GameOverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-game-over',
            template: __webpack_require__("../../../../../src/app/game-over/game-over.component.html"),
            styles: [__webpack_require__("../../../../../src/app/game-over/game-over.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api50x15_service__["a" /* Api50x15Service */],
            __WEBPACK_IMPORTED_MODULE_3__services_data50x15_service__["a" /* Data50x15Service */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], GameOverComponent);
    return GameOverComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/comodines/comodines.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/comodines/comodines.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <button class=\"col-md-3 col-md-offset-1\" [hidden]=\"!comodines['50pc']\" (click)=\"clickComodin('50pc')\" >50%</button>\n  <button class=\"col-md-3 col-md-offset-1\" [hidden]=\"!comodines['change']\" (click)=\"clickComodin('change')\" >Cambio Pregunta</button>\n  <button class=\"col-md-3 col-md-offset-1\" [hidden]=\"!comodines['google']\" (click)=\"clickComodin('google')\" >Google</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/comodines/comodines.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComodinesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComodinesComponent = (function () {
    function ComodinesComponent() {
        this.comodinSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ComodinesComponent.prototype.ngOnInit = function () {
    };
    ComodinesComponent.prototype.clickComodin = function (comodin) {
        this.comodinSelect.emit(comodin);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ComodinesComponent.prototype, "comodines", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ComodinesComponent.prototype, "comodinSelect", void 0);
    ComodinesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-comodines',
            template: __webpack_require__("../../../../../src/app/main/comodines/comodines.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/comodines/comodines.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ComodinesComponent);
    return ComodinesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h1 class=\"col-md-4\">{{ player_name }}</h1>\n  <app-comodines class=\"col-md-offset-1 col-md-6\" [comodines]='comodines' (comodinSelect)=\"handleComodin($event)\"></app-comodines>\n</div>\n<div class=\"row\">\n  <app-pregunta [pregunta]='question' (answerSelect)=\"handleAnswer($event)\" ></app-pregunta>\n</div>\n<div class=\"row\">\n  <button class=\"col-md-2 col-md-offset-1\" (click)=\"plantarse()\">Plantarse</button>\n</div>\n<app-popup-google [hidden]=\"hidePopup\" [google_search]='google_search' (close)=\"hide_google_popup($event)\" (send)=\"comodin_google($event)\" ></app-popup-google>\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api50x15_service__ = __webpack_require__("../../../../../src/app/services/api50x15.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data50x15_service__ = __webpack_require__("../../../../../src/app/services/data50x15.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainComponent = (function () {
    function MainComponent(service_api50x15, service_data50x15, route, router) {
        this.service_api50x15 = service_api50x15;
        this.service_data50x15 = service_data50x15;
        this.route = route;
        this.router = router;
        this.hidePopup = true;
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.initialize_windows(params['name']);
        });
    };
    MainComponent.prototype.initialize_windows = function (param_name) {
        var _this = this;
        this.player_name = param_name;
        this.service_api50x15.getQuestion(this.player_name)
            .subscribe(function (question) {
            _this.question = question;
            console.log(_this.question);
        });
        this.service_api50x15.getComodines(this.player_name)
            .subscribe(function (res) {
            _this.comodines = res['comodines'];
        });
    };
    MainComponent.prototype.next_turn = function () {
        var _this = this;
        this.google_search = null;
        var nextPlayer = this.service_data50x15.getNextPlayer();
        if (nextPlayer === -1) {
            this.service_api50x15.getPlayersLife()
                .subscribe(function (value) {
                _this.service_data50x15.setPlayersLife(value['players_life']);
                var gameover = _this.service_data50x15.isGameOver();
                if (gameover) {
                    _this.router.navigateByUrl('end_game', { skipLocationChange: true });
                }
                else {
                    _this.router.navigateByUrl('end_turn', { skipLocationChange: true });
                }
            });
        }
        else {
            if (nextPlayer === this.player_name) {
                this.initialize_windows(nextPlayer);
            }
            else {
                this.router.navigateByUrl('/main/' + nextPlayer, { skipLocationChange: true });
            }
        }
    };
    MainComponent.prototype.handleAnswer = function (answer) {
        var _this = this;
        console.log(answer);
        this.service_api50x15.postAnswer(this.player_name, answer)
            .subscribe(function (value) { return _this.next_turn(); });
    };
    MainComponent.prototype.handleComodin = function (comodin) {
        var _this = this;
        console.log(comodin);
        if (comodin === 'google') {
            this.hidePopup = false;
            console.log('hidePopup', this.hidePopup);
        }
        else {
            this.service_api50x15.postComodin(this.player_name, comodin)
                .subscribe(function (value) {
                _this.service_data50x15.useComodin(_this.player_name, comodin);
                _this.next_turn();
            });
        }
    };
    MainComponent.prototype.comodin_google = function (query) {
        var _this = this;
        console.log(query);
        this.service_api50x15.postComodinGoogle(this.player_name, query)
            .subscribe(function (value) {
            console.log(value);
            _this.google_search = value['google_search']['data'];
        });
    };
    MainComponent.prototype.hide_google_popup = function () {
        this.hidePopup = true;
    };
    MainComponent.prototype.plantarse = function () {
        var _this = this;
        this.service_api50x15.plantarPlayer(this.player_name)
            .subscribe(function (value) { return _this.next_turn(); });
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api50x15_service__["a" /* Api50x15Service */],
            __WEBPACK_IMPORTED_MODULE_3__services_data50x15_service__["a" /* Data50x15Service */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/popup-google/popup-google.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal {\n  display: block;\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  padding-top: 100px; /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n/* Modal Content */\n.modal-content {\n  background-color: #fefefe;\n  margin: auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%;\n}\n\n/* The Close Button */\n.close {\n  color: #aaaaaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/popup-google/popup-google.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"myModal\" class=\"modal\">\n\n  <!-- Modal content -->\n  <div class=\"modal-content\">\n    <div class=\"row\">\n      <p class=\"h2\">Google Search</p>\n    </div>\n    <div class=\"row\">\n      <div *ngIf=\"!google_search\">\n        <div class=\"col-md-8 col-md-offset-1\">\n          <input type=\"text\" class=\"form-control input-lg\" #googleQuery>\n        </div>\n        <div class=\"col-md-3\">\n          <button (click)=\"send_query(googleQuery.value)\" type=\"button\" class=\"col-md-8 col-md-offset-1 btn btn-success btn-lg\">Send</button>\n        </div>\n      </div>\n      <div *ngIf=\"google_search\">\n        <ul>\n          <li *ngFor=\"let result of google_search\">\n            <h3>{{result.title}}</h3>\n            <p>{{result.description}}</p>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"row row-10\"></div>\n    <div class=\"row\">\n      <button (click)=\"hide_popup()\" type=\"button\"class=\"col-md-1 col-md-offset-10 btn btn-secondary\">Close</button>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/popup-google/popup-google.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupGoogleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopupGoogleComponent = (function () {
    function PopupGoogleComponent() {
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.send = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    PopupGoogleComponent.prototype.ngOnInit = function () {
    };
    PopupGoogleComponent.prototype.hide_popup = function () {
        this.close.emit();
    };
    PopupGoogleComponent.prototype.send_query = function (query) {
        this.send.emit(query);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], PopupGoogleComponent.prototype, "google_search", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], PopupGoogleComponent.prototype, "close", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], PopupGoogleComponent.prototype, "send", void 0);
    PopupGoogleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-popup-google',
            template: __webpack_require__("../../../../../src/app/main/popup-google/popup-google.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/popup-google/popup-google.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PopupGoogleComponent);
    return PopupGoogleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/pregunta/pregunta.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/pregunta/pregunta.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n<p  class=\"col-md-10 col-md-offset-1 \" >{{ pregunta.enunciado }}</p>\n</div>\n<div class=\"row\">\n  <button class=\"col-md-5 col-md-offset-1\" (click)=\"clickAnswer(pregunta.respuestas[0].key)\" >{{ pregunta.respuestas[0].text }}</button>\n  <button class=\"col-md-5\" (click)=\"clickAnswer(pregunta.respuestas[1].key)\" >{{ pregunta.respuestas[1].text }}</button>\n</div>\n<div *ngIf=\"pregunta.respuestas.length > 2\" class=\"row\">\n  <button class=\"col-md-offset-1 col-md-5\" (click)=\"clickAnswer(pregunta.respuestas[2].key)\" >{{ pregunta.respuestas[2].text }}</button>\n  <button class=\"col-md-5\" (click)=\"clickAnswer(pregunta.respuestas[3].key)\" >{{ pregunta.respuestas[3].text }}</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/pregunta/pregunta.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreguntaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PreguntaComponent = (function () {
    function PreguntaComponent() {
        this.answerSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    PreguntaComponent.prototype.ngOnInit = function () {
    };
    PreguntaComponent.prototype.clickAnswer = function (key) {
        console.log(this.pregunta);
        console.log(key);
        this.answerSelect.emit(key);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], PreguntaComponent.prototype, "pregunta", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], PreguntaComponent.prototype, "answerSelect", void 0);
    PreguntaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pregunta',
            template: __webpack_require__("../../../../../src/app/main/pregunta/pregunta.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/pregunta/pregunta.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PreguntaComponent);
    return PreguntaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/api50x15.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api50x15Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Api50x15Service = (function () {
    function Api50x15Service(http) {
        this.http = http;
        // private baseUrl = 'http://localhost:3000/game/';
        this.baseUrl = '/game/';
        this.pregutnaUrl = 'pregunta';
        this.startUrl = 'start';
        this.nextLvlUrl = 'nextLVL';
        this.answerUrl = 'answer';
        this.comodinesUrl = 'comodines';
        this.comodinUrl = 'comodin';
        this.playersLifeUrl = 'players_life';
        this.playersPointsUrl = 'players_points';
        this.plantarseUrl = 'plantarse';
        this.options = { withCredentials: true };
    }
    Api50x15Service.prototype.getQuestion = function (name) {
        return this.http.get(this.baseUrl + this.pregutnaUrl + '/' + name, this.options)
            .map(function (response) { return response['question']; })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); });
    };
    Api50x15Service.prototype.postNextLvl = function () {
        return this.http.post(this.baseUrl + this.nextLvlUrl, {}, this.options)
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); });
    };
    Api50x15Service.prototype.postStart = function (names) {
        return this.http.post(this.baseUrl + this.startUrl, { 'pNames': names }, this.options)
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); });
    };
    Api50x15Service.prototype.postAnswer = function (name, key) {
        var body = {
            pName: name,
            answer: key
        };
        return this.http.post(this.baseUrl + this.answerUrl, body, this.options)
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); });
    };
    Api50x15Service.prototype.postComodin = function (name, comodin) {
        var body = {
            pName: name,
            answer: comodin
        };
        return this.http.post(this.baseUrl + this.comodinUrl, body, this.options)
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); });
    };
    Api50x15Service.prototype.postComodinGoogle = function (name, query) {
        var body = {
            pName: name,
            answer: 'google',
            text: query
        };
        return this.http.post(this.baseUrl + this.comodinUrl, body, this.options)
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); });
    };
    Api50x15Service.prototype.getComodines = function (name) {
        return this.http.get(this.baseUrl + this.comodinesUrl + '/' + name, this.options)
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); });
    };
    Api50x15Service.prototype.getPlayersLife = function () {
        return this.http.get(this.baseUrl + this.playersLifeUrl, this.options)
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); });
    };
    Api50x15Service.prototype.getPlayersPoints = function () {
        return this.http.get(this.baseUrl + this.playersPointsUrl, this.options)
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); });
    };
    Api50x15Service.prototype.plantarPlayer = function (name) {
        var body = {
            pName: name
        };
        return this.http.post(this.baseUrl + this.plantarseUrl, body, this.options)
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); });
    };
    Api50x15Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], Api50x15Service);
    return Api50x15Service;
}());



/***/ }),

/***/ "../../../../../src/app/services/data50x15.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Data50x15Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Data50x15Service = (function () {
    function Data50x15Service() {
        this.alive_players = [];
        this.dead_players = [];
        this.current_players = [];
        this.players_50pc = [];
        this.players_change = [];
        this.players_change_50pc = [];
        this.current_type = 1;
        this.players_points = [];
        this.all_players = [];
    }
    Data50x15Service.prototype.getNextPlayer = function () {
        if (this.current_players.length > 0) {
            this.current_type = 1;
            return this.current_players.pop();
        }
        if (this.players_50pc.length > 0) {
            this.current_type = 2;
            return this.players_50pc.pop();
        }
        if (this.players_change.length > 0) {
            this.current_type = 3;
            return this.players_change.pop();
        }
        if (this.players_change_50pc.length > 0) {
            this.current_type = 4;
            return this.players_change_50pc.pop();
        }
        return -1;
    };
    Data50x15Service.prototype.getAllPlayer = function () {
        return this.all_players;
    };
    Data50x15Service.prototype.useComodin = function (name, comodin) {
        switch (comodin) {
            case '50pc':
                if (this.current_type <= 2) {
                    this.players_50pc.push(name);
                }
                else {
                    this.players_change_50pc.push(name);
                }
                break;
            case 'change':
                this.players_change.push(name);
                break;
        }
    };
    Data50x15Service.prototype.setPlayersLife = function (ply_life) {
        var new_alive_players = [];
        var new_dead_players = [];
        for (var player in ply_life) {
            if (ply_life[player]['alive']) {
                new_alive_players.push(player);
            }
            else {
                new_dead_players.push(player);
            }
        }
        this.alive_players = new_alive_players;
        this.dead_players = new_dead_players;
    };
    Data50x15Service.prototype.isGameOver = function () {
        return this.alive_players.length === 0;
    };
    Data50x15Service.prototype.nextTurn = function () {
        this.current_players = this.alive_players.slice();
        this.current_players.reverse();
    };
    Data50x15Service.prototype.setPlayersPoints = function (ply_points) {
        this.players_points = ply_points;
    };
    Data50x15Service.prototype.startGame = function (ply_array) {
        this.all_players = ply_array.slice();
        this.alive_players = ply_array.slice();
        this.current_players = ply_array.slice();
        this.current_players.reverse();
    };
    Data50x15Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Data50x15Service);
    return Data50x15Service;
}());



/***/ }),

/***/ "../../../../../src/app/start/player-menu/player-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/start/player-menu/player-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <table class=\"table table-striped table-sm\">\n    <tr *ngFor=\"let player of players\" class=\"row\">\n      <p class=\"col-md-8\">{{player}}</p>\n      <button (click)=\"removePlayer(player)\"\n              type=\"button\" class=\"close col-md-3\"\n              aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </tr>\n  </table>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-8\">\n    <input (keyup.enter)=\"addUser(newUser)\"\n           type=\"text\"\n           class=\"form-control\" #newUser>\n  </div>\n  <div class=\"col-md-4\">\n    <button (click)=\"addUser(newUser)\"\n            type=\"button\"\n            class=\"col-md-10 col-md-offset-1 btn\">\n      Send\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/start/player-menu/player-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlayerMenuComponent = (function () {
    function PlayerMenuComponent() {
        this.changePlayers = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.players = [];
    }
    PlayerMenuComponent.prototype.ngOnInit = function () {
    };
    PlayerMenuComponent.prototype.removePlayer = function (player) {
        this.players.splice(this.players.indexOf(player), 1);
        this.changePlayers.emit(this.players);
    };
    PlayerMenuComponent.prototype.addUser = function (input) {
        console.log(input.value);
        this.players.push(input.value);
        input.value = '';
        this.changePlayers.emit(this.players);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], PlayerMenuComponent.prototype, "changePlayers", void 0);
    PlayerMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-player-menu',
            template: __webpack_require__("../../../../../src/app/start/player-menu/player-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/start/player-menu/player-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PlayerMenuComponent);
    return PlayerMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/start/start.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/start/start.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4\">\n    <app-player-menu (changePlayers)=\"handlePlayers($event)\"></app-player-menu>\n  </div>\n</div>\n<div class=\"row\">\n  <button (click)=\"onClickMe()\">Click me!</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/start/start.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api50x15_service__ = __webpack_require__("../../../../../src/app/services/api50x15.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data50x15_service__ = __webpack_require__("../../../../../src/app/services/data50x15.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StartComponent = (function () {
    function StartComponent(service_api50x15, service_data50x15, router) {
        this.service_api50x15 = service_api50x15;
        this.service_data50x15 = service_data50x15;
        this.router = router;
        this.players = [];
    }
    StartComponent.prototype.ngOnInit = function () {
    };
    StartComponent.prototype.onClickMe = function () {
        var _this = this;
        this.service_api50x15.postStart(this.players)
            .subscribe(function (data) {
            console.log(data);
            _this.service_api50x15.postNextLvl()
                .subscribe(function (value) {
                console.log(_this.players);
                _this.service_data50x15.startGame(_this.players);
                var next_player = _this.service_data50x15.getNextPlayer();
                console.log(next_player);
                _this.router.navigateByUrl('/main/' + next_player, { skipLocationChange: true });
            });
        });
    };
    StartComponent.prototype.handlePlayers = function (players) {
        this.players = players;
    };
    StartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-start',
            template: __webpack_require__("../../../../../src/app/start/start.component.html"),
            styles: [__webpack_require__("../../../../../src/app/start/start.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api50x15_service__["a" /* Api50x15Service */],
            __WEBPACK_IMPORTED_MODULE_3__services_data50x15_service__["a" /* Data50x15Service */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], StartComponent);
    return StartComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map