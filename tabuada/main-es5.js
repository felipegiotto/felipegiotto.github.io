(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div [ngClass]=\"{'layout': aplicarLayout}\" style=\"background-image: url('assets/fundo.jpg')\">\n\n  <div class=\"wrapper\">\n    <h1>Tabuada do Luiz</h1>\n\n    <p *ngIf=\"!jogando\">\n      De\n      <input [(ngModel)]=\"numeroMinimo\" size=\"3\"/>\n      até\n      <input [(ngModel)]=\"numeroMaximo\" size=\"3\"/>\n\n      <br />\n\n      Qtd de ciclos: \n      <input [(ngModel)]=\"qtdCiclos\" size=\"3\"/>\n\n      <br /><br />\n\n      <button (click)=\"iniciar()\">Iniciar</button>\n    </p>\n    <p *ngIf=\"jogando\">\n      De {{ numeroMinimo }} até {{ numeroMaximo }}. Qtd de ciclos: {{ qtdCiclos }}. Perguntas: {{ perguntas.length }}\n    </p>\n\n    <p *ngIf=\"tempo\">Parabéns!!! Tempo: {{ tempo }} segundos!</p>\n\n    <div *ngIf=\"perguntaAtual\">\n      <p class=\"pergunta-atual\">{{ perguntaAtual.numero1 }} x {{ perguntaAtual.numero2 }} = ?</p>\n\n      <ul class=\"botoes\" *ngIf=\"opcoesRespostas\">\n        <li *ngFor=\"let opcao of opcoesRespostas\">\n          <button (click)=\"responder(opcao)\">{{ opcao }}</button>\n        </li>\n      </ul>\n    </div>\n\n    <ul class=\"restantes\" *ngIf=\"jogando\">\n      <li *ngFor=\"let i of perguntas\" style=\"background-image: url('assets/tiro.png')\">|</li>\n    </ul>\n\n  </div>\n</div>\n\n<app-tiro-certo\n  *ngIf=\"respostaCorreta\"\n  [aplicarLayout]=\"aplicarLayout\"\n  [pergunta]=\"respostaCorreta\"\n  (dismiss)=\"sortearProximaPergunta()\">\n</app-tiro-certo>\n\n<app-tiro-errado\n  *ngIf=\"respostaErrada\"\n  [aplicarLayout]=\"aplicarLayout\"\n  [pergunta]=\"respostaErrada\"\n  (dismiss)=\"sortearProximaPergunta()\">\n</app-tiro-errado>\n\n<app-pontuacao\n  *ngIf=\"mostrandoResultado\"\n  [pontuacao]=\"pontuacao\"\n  (reset)=\"reset()\"></app-pontuacao>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pontuacao/pontuacao.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pontuacao/pontuacao.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>REPLAY</p>\n\n<canvas #canvas width=\"400\" height=\"400\"></canvas>\n\n<p>\n    Pontos: {{ totalPontosFloor }}\n\n    <br />\n\n    <img [src]=\"totalPontosFloor < 100 ? 'assets/star_black.png' : 'assets/star_gold.png'\" height=\"50\" />\n    <img [src]=\"totalPontosFloor < 300 ? 'assets/star_black.png' : 'assets/star_gold.png'\" height=\"50\" />\n    <img [src]=\"totalPontosFloor < 500 ? 'assets/star_black.png' : 'assets/star_gold.png'\" height=\"50\" />\n    <img [src]=\"totalPontosFloor < 700 ? 'assets/star_black.png' : 'assets/star_gold.png'\" height=\"50\" />\n    <img [src]=\"totalPontosFloor < 900 ? 'assets/star_black.png' : 'assets/star_gold.png'\" height=\"50\" />\n\n    <br />\n\n    <button (click)=\"fechar()\">Início</button>\n</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tiro-certo/tiro-certo.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tiro-certo/tiro-certo.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div [ngClass]=\"{'layout': aplicarLayout}\">\n    <img class=\"alvo\" src=\"assets/tiro_certo.gif\" *ngIf=\"aplicarLayout\"/>\n    <p class=\"pergunta\">{{ pergunta.numero1 }} x {{ pergunta.numero2 }} = {{ pergunta.resposta }}</p>\n    <button class=\"fechar\" (click)=\"fechar()\">RELOAD</button>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tiro-errado/tiro-errado.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tiro-errado/tiro-errado.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div [ngClass]=\"{'layout': aplicarLayout}\">\n    <img class=\"alvo\" src=\"assets/tiro_errado.png\" *ngIf=\"aplicarLayout\"/>\n    <p class=\"pergunta\">{{ pergunta.numero1 }} x {{ pergunta.numero2 }} = {{ pergunta.numero1 * pergunta.numero2 }}</p>\n    <button class=\"fechar\" (click)=\"fechar()\" *ngIf=\"exibirBotaoSair\">RELOAD</button>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  font-family: sans-serif;\n  text-align: center;\n}\n\n.layout {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  height: 100vh;\n  width: 100vw;\n  box-sizing: border-box;\n}\n\n.layout .restantes li {\n  width: 10px;\n  height: 40px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  color: rgba(0, 0, 0, 0);\n}\n\n.wrapper {\n  background-color: rgba(255, 255, 255, 0.7);\n  margin: 40px;\n  padding: 10px;\n  border-radius: 15px;\n  position: relative;\n}\n\n.wrapper button {\n  font-size: 2em;\n}\n\n.wrapper .restantes {\n  text-align: right;\n}\n\n.wrapper .restantes li {\n  display: inline-block;\n}\n\n.pergunta-atual {\n  font-size: 3em;\n}\n\n.botoes li {\n  display: inline-block;\n  width: 25%;\n  margin: 10px 10px;\n}\n\n.botoes li button {\n  width: 100%;\n  font-size: 1.5em;\n  padding: 15px;\n}\n\nul {\n  list-style-type: none;\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWV0YS93b3Jrc3BhY2UvdGFidWFkYS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksdUJBQUE7RUFFQSxrQkFBQTtBQ0RKOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNESjs7QURHSTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0FDRlI7O0FETUE7RUFDSSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0hKOztBREtJO0VBQ0ksY0FBQTtBQ0hSOztBRE1JO0VBQ0ksaUJBQUE7QUNKUjs7QURNUTtFQUNJLHFCQUFBO0FDSlo7O0FEU0E7RUFDSSxjQUFBO0FDTko7O0FEVUk7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ1BSOztBRFNRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ1BaOztBRFlBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FDVEoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG5cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sYXlvdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBcbiAgICAucmVzdGFudGVzIGxpIHtcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3Rpcm8ucG5nXCIpO1xuICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgIH1cbn1cblxuLndyYXBwZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgICBtYXJnaW46IDQwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIGJ1dHRvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIH1cblxuICAgIC5yZXN0YW50ZXMge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcblxuICAgICAgICBsaSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5wZXJndW50YS1hdHVhbCB7XG4gICAgZm9udC1zaXplOiAzZW07XG59XG5cbi5ib3RvZXMge1xuICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICBtYXJnaW46IDEwcHggMTBweDtcblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxudWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwcHg7XG59IiwiOmhvc3Qge1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubGF5b3V0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4ubGF5b3V0IC5yZXN0YW50ZXMgbGkge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xufVxuXG4ud3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgbWFyZ2luOiA0MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ud3JhcHBlciBidXR0b24ge1xuICBmb250LXNpemU6IDJlbTtcbn1cbi53cmFwcGVyIC5yZXN0YW50ZXMge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi53cmFwcGVyIC5yZXN0YW50ZXMgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5wZXJndW50YS1hdHVhbCB7XG4gIGZvbnQtc2l6ZTogM2VtO1xufVxuXG4uYm90b2VzIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjUlO1xuICBtYXJnaW46IDEwcHggMTBweDtcbn1cbi5ib3RvZXMgbGkgYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwcHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _pergunta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pergunta */ "./src/app/pergunta.ts");
            /* harmony import */ var _pontuacao_pontuacao__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pontuacao/pontuacao */ "./src/app/pontuacao/pontuacao.ts");
            var AppComponent_1;
            // declare var device;
            var AppComponent = AppComponent_1 = /** @class */ (function () {
                // declare var device;
                function AppComponent() {
                    this.aplicarLayout = true;
                    this.jogando = false;
                    this.mostrandoResultado = false;
                    this.tiro = new Audio();
                    this.tiroErrado = new Audio();
                }
                AppComponent.prototype.ngOnInit = function () {
                    document.addEventListener('deviceready', function () {
                        // alert(device.platform); 
                    }, false);
                    this.tiro.src = 'assets/tiro_certo.mp3';
                    this.tiro.load();
                    this.tiroErrado.src = 'assets/tiro_errado.mp3';
                    this.tiroErrado.load();
                    this.reset();
                };
                AppComponent.prototype.salvarParametros = function () {
                    localStorage.setItem('tabuada.numeroMinimo', this.numeroMinimo.toString());
                    localStorage.setItem('tabuada.numeroMaximo', this.numeroMaximo.toString());
                    localStorage.setItem('tabuada.qtdCiclos', this.qtdCiclos.toString());
                };
                AppComponent.prototype.iniciar = function () {
                    if (!(this.numeroMinimo >= 1) || !(this.numeroMinimo <= 10)) {
                        alert('Faixa de números deve ser entre 1 e 10');
                        return;
                    }
                    if (!(this.numeroMaximo >= 1) || !(this.numeroMaximo <= 10)) {
                        alert('Faixa de números deve ser entre 1 e 10');
                        return;
                    }
                    if (this.numeroMinimo > this.numeroMaximo) {
                        alert('Faixa de números inválida');
                        return;
                    }
                    if (!(this.qtdCiclos >= 1) || !(this.qtdCiclos <= 10)) {
                        alert('Ciclos deve ser entre 1 e 10');
                        return;
                    }
                    this.montarListaPerguntas();
                    this.salvarParametros();
                    this.jogando = true;
                    this.sortearProximaPergunta();
                    this.inicioTotal = new Date();
                    this.tempo = undefined;
                };
                AppComponent.prototype.reset = function () {
                    this.pontuacao = [];
                    this.jogando = false;
                    this.mostrandoResultado = false;
                    this.numeroMinimo = Number.parseInt(localStorage.getItem('tabuada.numeroMinimo') || '2');
                    this.numeroMaximo = Number.parseInt(localStorage.getItem('tabuada.numeroMaximo') || '2');
                    this.qtdCiclos = Number.parseInt(localStorage.getItem('tabuada.qtdCiclos') || '2');
                };
                AppComponent.prototype.montarListaPerguntas = function () {
                    this.perguntas = [];
                    for (var ciclo = 1; ciclo <= this.qtdCiclos; ciclo++) {
                        for (var numero = this.numeroMinimo; numero <= this.numeroMaximo; numero++) {
                            for (var multiplo = 1; multiplo <= AppComponent_1.MULTIPLO_ATE; multiplo++) {
                                var p = new _pergunta__WEBPACK_IMPORTED_MODULE_2__["Pergunta"]();
                                p.numero1 = numero;
                                p.numero2 = multiplo;
                                this.perguntas.push(p);
                            }
                        }
                    }
                };
                AppComponent.prototype.sortearProximaPergunta = function () {
                    this.respostaCorreta = undefined;
                    this.respostaErrada = undefined;
                    if (this.perguntas.length > 0) {
                        this.indicePerguntaAtual = Math.floor(Math.random() * this.perguntas.length);
                        this.perguntaAtual = this.perguntas[this.indicePerguntaAtual];
                        this.inicioPergunta = new Date();
                        // Monta lista de respostas. Uma das opções é a resposta certa
                        this.opcoesRespostas = [this.perguntaAtual.numero1 * this.perguntaAtual.numero2];
                        // Escolhe outras repostas, diferentes das já escolhidas.
                        while (this.opcoesRespostas.length < 6) {
                            var opcao = Math.round(Math.random() * this.numeroMaximo * 10);
                            if (this.opcoesRespostas.indexOf(opcao) === -1) {
                                this.opcoesRespostas.push(opcao);
                            }
                        }
                        // Embaralha o array
                        this.shuffleArray(this.opcoesRespostas);
                    }
                    else {
                        this.encerrar();
                    }
                };
                AppComponent.prototype.encerrar = function () {
                    this.mostrandoResultado = true;
                    this.jogando = false;
                    var fim = new Date();
                    this.tempo = Math.floor((fim.valueOf() - this.inicioTotal.valueOf()) / 1000);
                    this.perguntaAtual = undefined;
                    this.indicePerguntaAtual = undefined;
                };
                AppComponent.prototype.responder = function (resposta) {
                    if (this.perguntaAtual) {
                        this.perguntaAtual.resposta = resposta;
                        var ponto = new _pontuacao_pontuacao__WEBPACK_IMPORTED_MODULE_3__["Pontuacao"]();
                        ponto.tempo = Math.floor((new Date().valueOf() - this.inicioPergunta.valueOf()));
                        if (this.perguntaAtual.numero1 * this.perguntaAtual.numero2 === resposta) {
                            this.respostaCorreta = this.perguntaAtual;
                            this.perguntas.splice(this.indicePerguntaAtual, 1);
                            ponto.acertou = true;
                            this.tiro.currentTime = 0;
                            this.tiro.play();
                            //if (ponto.tempo <= 1000) {
                            //  ponto.pontos = 100;
                            //} else if (ponto.tempo <= 2000) {
                            //  const restante = ponto.tempo - 1000;
                            //  ponto.pontos = 100 - (restante / 100); // De 100 a 90
                            if (ponto.tempo <= 2000) {
                                ponto.pontos = 1000 - (ponto.tempo / 2000); // De 100 a 90
                            }
                            else if (ponto.tempo <= 5000) {
                                var restante = ponto.tempo - 2000;
                                ponto.pontos = 900 - (restante / 750); // De 90 a 50
                            }
                            else {
                                ponto.pontos = 500;
                            }
                        }
                        else {
                            this.respostaErrada = this.perguntaAtual;
                            this.perguntas.push(this.perguntaAtual);
                            ponto.acertou = false;
                            ponto.pontos = 0;
                            this.tiroErrado.currentTime = 0;
                            this.tiroErrado.play();
                        }
                        this.pontuacao.push(ponto);
                    }
                };
                /**
                 * Randomize array element order in-place.
                 * Using Durstenfeld shuffle algorithm.
                 * Fonte: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
                 */
                AppComponent.prototype.shuffleArray = function (array) {
                    for (var i = array.length - 1; i > 0; i--) {
                        var j = Math.floor(Math.random() * (i + 1));
                        var temp = array[i];
                        array[i] = array[j];
                        array[j] = temp;
                    }
                };
                return AppComponent;
            }());
            AppComponent.MULTIPLO_ATE = 10;
            AppComponent = AppComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _tiro_certo_tiro_certo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tiro-certo/tiro-certo.component */ "./src/app/tiro-certo/tiro-certo.component.ts");
            /* harmony import */ var _tiro_errado_tiro_errado_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tiro-errado/tiro-errado.component */ "./src/app/tiro-errado/tiro-errado.component.ts");
            /* harmony import */ var _pontuacao_pontuacao_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pontuacao/pontuacao.component */ "./src/app/pontuacao/pontuacao.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _tiro_certo_tiro_certo_component__WEBPACK_IMPORTED_MODULE_5__["TiroCertoComponent"],
                        _tiro_errado_tiro_errado_component__WEBPACK_IMPORTED_MODULE_6__["TiroErradoComponent"],
                        _pontuacao_pontuacao_component__WEBPACK_IMPORTED_MODULE_7__["PontuacaoComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/pergunta.ts": 
        /*!*****************************!*\
          !*** ./src/app/pergunta.ts ***!
          \*****************************/
        /*! exports provided: Pergunta */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pergunta", function () { return Pergunta; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Pergunta = /** @class */ (function () {
                function Pergunta() {
                }
                return Pergunta;
            }());
            /***/ 
        }),
        /***/ "./src/app/pontuacao/pontuacao.component.scss": 
        /*!****************************************************!*\
          !*** ./src/app/pontuacao/pontuacao.component.scss ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100vw;\n  height: 100vh;\n  box-sizing: border-box;\n  z-index: 2;\n  background-color: gray;\n  color: white;\n}\n\np, button {\n  font-size: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWV0YS93b3Jrc3BhY2UvdGFidWFkYS9zcmMvYXBwL3BvbnR1YWNhby9wb250dWFjYW8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BvbnR1YWNhby9wb250dWFjYW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BvbnR1YWNhby9wb250dWFjYW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHotaW5kZXg6IDI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbnAsIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAyZW07XG59IiwiOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgei1pbmRleDogMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5wLCBidXR0b24ge1xuICBmb250LXNpemU6IDJlbTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/pontuacao/pontuacao.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/pontuacao/pontuacao.component.ts ***!
          \**************************************************/
        /*! exports provided: PontuacaoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PontuacaoComponent", function () { return PontuacaoComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PontuacaoComponent = /** @class */ (function () {
                function PontuacaoComponent() {
                    this.reset = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.larguraCanvas = 400;
                    this.larguraAlvo = 300;
                    this.totalPontos = 0;
                    this.totalPontosFloor = 0;
                    this.qtdTiros = 0;
                    this.tiro = new Audio();
                }
                PontuacaoComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.ctx = this.canvas.nativeElement.getContext('2d');
                    // this.instanciarPontuacaoFake();
                    this.tiro.src = 'assets/tiro.mp3';
                    this.tiro.load();
                    this.desenharAlvo();
                    setTimeout(function () { return _this.desenharProximoPonto(); }, 2000);
                    //this.desenharProximoPonto();
                };
                PontuacaoComponent.prototype.fechar = function () {
                    if (this.timeout) {
                        clearTimeout(this.timeout);
                        this.timeout = undefined;
                    }
                    this.reset.emit();
                };
                PontuacaoComponent.prototype.instanciarPontuacaoFake = function () {
                    this.pontuacao = [];
                    for (var i = 1; i <= 10; i++) {
                        this.pontuacao.push({ acertou: Math.random() > 0.3, tempo: Math.random() * 10000, pontos: 100 });
                    }
                    this.pontuacao.push({ acertou: true, tempo: 2000, pontos: 100 });
                    this.pontuacao.push({ acertou: true, tempo: 2500, pontos: 100 });
                    this.pontuacao.push({ acertou: true, tempo: 3500, pontos: 100 });
                    this.pontuacao.push({ acertou: false, tempo: 3500, pontos: 100 });
                    this.pontuacao.push({ acertou: false, tempo: 4500, pontos: 100 });
                };
                PontuacaoComponent.prototype.desenharAlvo = function () {
                    this.qtdTiros = this.pontuacao.length;
                    var raio = this.larguraAlvo / 2;
                    var centro = this.larguraCanvas / 2;
                    // Círculo maior, vermelho
                    this.ctx.beginPath();
                    this.ctx.fillStyle = 'red';
                    this.ctx.arc(centro, centro, raio, 0, 2 * Math.PI);
                    this.ctx.fill();
                    // Círculo interno, preto
                    this.ctx.beginPath();
                    this.ctx.fillStyle = 'white';
                    this.ctx.arc(centro, centro, raio / 5 * 4, 0, 2 * Math.PI);
                    this.ctx.fill();
                    // Círculo interno, vermelho
                    this.ctx.beginPath();
                    this.ctx.fillStyle = 'red';
                    this.ctx.arc(centro, centro, raio / 5 * 3, 0, 2 * Math.PI);
                    this.ctx.fill();
                    // Círculo interno, preto
                    this.ctx.beginPath();
                    this.ctx.fillStyle = 'white';
                    this.ctx.arc(centro, centro, raio / 5 * 2, 0, 2 * Math.PI);
                    this.ctx.fill();
                    // Círculo interno, vermelho
                    this.ctx.beginPath();
                    this.ctx.fillStyle = 'red';
                    this.ctx.arc(centro, centro, raio / 5 * 1, 0, 2 * Math.PI);
                    this.ctx.fill();
                };
                PontuacaoComponent.prototype.desenharProximoPonto = function () {
                    var _this = this;
                    this.timeout = undefined;
                    if (this.pontuacao.length) {
                        var raio = this.larguraAlvo / 2;
                        var centro = this.larguraCanvas / 2;
                        var ponto = this.pontuacao.shift();
                        var tempo = ponto.tempo;
                        this.totalPontos += ponto.pontos;
                        this.totalPontosFloor = Math.floor(this.totalPontos / this.qtdTiros);
                        var distancia = void 0;
                        if (!ponto.acertou) {
                            distancia = raio * 1.2;
                        }
                        else if (tempo <= 2000) {
                            distancia = (raio / 5) * tempo / 2000;
                        }
                        else if (tempo <= 5000) {
                            distancia = (raio / 5) * tempo / 1000;
                        }
                        else {
                            distancia = raio * 0.95;
                        }
                        var angulo = Math.random() * 2 * Math.PI;
                        var distanciaX = Math.cos(angulo) * distancia;
                        var distanciaY = Math.sin(angulo) * distancia;
                        // Desenha o tiro
                        this.ctx.beginPath();
                        this.ctx.fillStyle = 'black';
                        this.ctx.arc(centro + distanciaX, centro + distanciaY, 7, 0, 2 * Math.PI);
                        this.ctx.fill();
                        this.reproduzirTiro();
                        var tempoParaEsperar = Math.min(ponto.tempo / 5, 1000);
                        this.timeout = setTimeout(function () { return _this.desenharProximoPonto(); }, tempoParaEsperar);
                    }
                };
                PontuacaoComponent.prototype.reproduzirTiro = function () {
                    this.tiro.currentTime = 0;
                    this.tiro.play();
                };
                return PontuacaoComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PontuacaoComponent.prototype, "pontuacao", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], PontuacaoComponent.prototype, "reset", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas', { static: true })
            ], PontuacaoComponent.prototype, "canvas", void 0);
            PontuacaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-pontuacao',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pontuacao.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pontuacao/pontuacao.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pontuacao.component.scss */ "./src/app/pontuacao/pontuacao.component.scss")).default]
                })
            ], PontuacaoComponent);
            /***/ 
        }),
        /***/ "./src/app/pontuacao/pontuacao.ts": 
        /*!****************************************!*\
          !*** ./src/app/pontuacao/pontuacao.ts ***!
          \****************************************/
        /*! exports provided: Pontuacao */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pontuacao", function () { return Pontuacao; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Pontuacao = /** @class */ (function () {
                function Pontuacao() {
                }
                return Pontuacao;
            }());
            /***/ 
        }),
        /***/ "./src/app/tiro-certo/tiro-certo.component.scss": 
        /*!******************************************************!*\
          !*** ./src/app/tiro-certo/tiro-certo.component.scss ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  z-index: 2;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  height: 100vh;\n  width: 100vw;\n  box-sizing: border-box;\n  padding: 5%;\n  background-color: lime;\n}\n\n.alvo {\n  max-width: 30%;\n  max-height: 30%;\n}\n\n.pergunta {\n  font-size: 4em;\n}\n\n.fechar {\n  font-size: 3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWV0YS93b3Jrc3BhY2UvdGFidWFkYS9zcmMvYXBwL3Rpcm8tY2VydG8vdGlyby1jZXJ0by5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGlyby1jZXJ0by90aXJvLWNlcnRvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUdBLHNCQUFBO0FDREo7O0FESUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0RKOztBRElBO0VBQ0ksY0FBQTtBQ0RKOztBRElBO0VBQ0ksY0FBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvdGlyby1jZXJ0by90aXJvLWNlcnRvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHotaW5kZXg6IDI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDUlO1xuXG4gICAgLy8gVmVyZGVcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMSk7XG59XG5cbi5hbHZvIHtcbiAgICBtYXgtd2lkdGg6IDMwJTtcbiAgICBtYXgtaGVpZ2h0OiAzMCU7XG59XG5cbi5wZXJndW50YSB7XG4gICAgZm9udC1zaXplOiA0ZW07XG59XG5cbi5mZWNoYXIge1xuICAgIGZvbnQtc2l6ZTogM2VtO1xufVxuIiwiOmhvc3Qge1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogNSU7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpbWU7XG59XG5cbi5hbHZvIHtcbiAgbWF4LXdpZHRoOiAzMCU7XG4gIG1heC1oZWlnaHQ6IDMwJTtcbn1cblxuLnBlcmd1bnRhIHtcbiAgZm9udC1zaXplOiA0ZW07XG59XG5cbi5mZWNoYXIge1xuICBmb250LXNpemU6IDNlbTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/tiro-certo/tiro-certo.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/tiro-certo/tiro-certo.component.ts ***!
          \****************************************************/
        /*! exports provided: TiroCertoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiroCertoComponent", function () { return TiroCertoComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var TiroCertoComponent = /** @class */ (function () {
                function TiroCertoComponent() {
                    this.dismiss = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                TiroCertoComponent.prototype.ngOnInit = function () {
                };
                TiroCertoComponent.prototype.fechar = function () {
                    this.dismiss.emit();
                };
                return TiroCertoComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], TiroCertoComponent.prototype, "pergunta", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], TiroCertoComponent.prototype, "aplicarLayout", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], TiroCertoComponent.prototype, "dismiss", void 0);
            TiroCertoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-tiro-certo',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tiro-certo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tiro-certo/tiro-certo.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tiro-certo.component.scss */ "./src/app/tiro-certo/tiro-certo.component.scss")).default]
                })
            ], TiroCertoComponent);
            /***/ 
        }),
        /***/ "./src/app/tiro-errado/tiro-errado.component.scss": 
        /*!********************************************************!*\
          !*** ./src/app/tiro-errado/tiro-errado.component.scss ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  z-index: 2;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  height: 100vh;\n  width: 100vw;\n  box-sizing: border-box;\n  padding: 5%;\n  background-color: red;\n}\n\n.alvo {\n  max-width: 30%;\n  max-height: 30%;\n}\n\n.pergunta {\n  font-size: 4em;\n}\n\n.fechar {\n  font-size: 3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YWV0YS93b3Jrc3BhY2UvdGFidWFkYS9zcmMvYXBwL3Rpcm8tZXJyYWRvL3Rpcm8tZXJyYWRvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aXJvLWVycmFkby90aXJvLWVycmFkby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFHQSxxQkFBQTtBQ0RKOztBRElBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3Rpcm8tZXJyYWRvL3Rpcm8tZXJyYWRvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHotaW5kZXg6IDI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDUlO1xuXG4gICAgLy8gVmVybWVsaG9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMSk7XG59XG5cbi5hbHZvIHtcbiAgICBtYXgtd2lkdGg6IDMwJTtcbiAgICBtYXgtaGVpZ2h0OiAzMCU7XG59XG5cbi5wZXJndW50YSB7XG4gICAgZm9udC1zaXplOiA0ZW07XG59XG5cbi5mZWNoYXIge1xuICAgIGZvbnQtc2l6ZTogM2VtO1xufVxuIiwiOmhvc3Qge1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogNSU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmFsdm8ge1xuICBtYXgtd2lkdGg6IDMwJTtcbiAgbWF4LWhlaWdodDogMzAlO1xufVxuXG4ucGVyZ3VudGEge1xuICBmb250LXNpemU6IDRlbTtcbn1cblxuLmZlY2hhciB7XG4gIGZvbnQtc2l6ZTogM2VtO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/tiro-errado/tiro-errado.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/tiro-errado/tiro-errado.component.ts ***!
          \******************************************************/
        /*! exports provided: TiroErradoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiroErradoComponent", function () { return TiroErradoComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var TiroErradoComponent = /** @class */ (function () {
                function TiroErradoComponent() {
                    this.dismiss = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.exibirBotaoSair = false;
                }
                TiroErradoComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    setTimeout(function () {
                        _this.exibirBotaoSair = true;
                    }, 4000);
                };
                TiroErradoComponent.prototype.fechar = function () {
                    this.dismiss.emit();
                };
                return TiroErradoComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], TiroErradoComponent.prototype, "pergunta", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], TiroErradoComponent.prototype, "aplicarLayout", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], TiroErradoComponent.prototype, "dismiss", void 0);
            TiroErradoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-tiro-errado',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tiro-errado.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tiro-errado/tiro-errado.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tiro-errado.component.scss */ "./src/app/tiro-errado/tiro-errado.component.scss")).default]
                })
            ], TiroErradoComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/taeta/workspace/tabuada/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map