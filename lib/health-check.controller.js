"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthController = void 0;
var common_1 = require("@nestjs/common");
var terminus_1 = require("@nestjs/terminus");
var HealthController = /** @class */ (function () {
    function HealthController(health, http, KEY_NAME, ENDPOINT) {
        this.health = health;
        this.http = http;
        this.KEY_NAME = KEY_NAME;
        this.ENDPOINT = ENDPOINT;
    }
    HealthController.prototype.check = function () {
        var _this = this;
        return this.health.check([
            function () { return _this.http.pingCheck(_this.KEY_NAME, _this.ENDPOINT); },
        ]);
    };
    __decorate([
        (0, common_1.Get)(),
        (0, terminus_1.HealthCheck)()
    ], HealthController.prototype, "check", null);
    HealthController = __decorate([
        (0, common_1.Controller)('health'),
        __param(2, (0, common_1.Inject)('KEY_NAME')),
        __param(3, (0, common_1.Inject)('ENDPOINT'))
    ], HealthController);
    return HealthController;
}());
exports.HealthController = HealthController;
