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
/*
    参数装饰器声明在一个参数声明之前（紧靠着参数声明）
    参数
        对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
        成员的名字
        参数在函数参数列表中的索引
 */
function logParams(params) {
    return function (target, paramsName, paramsIndex) {
        console.log(target);
        console.log(paramsName); // getData
        console.log(paramsIndex); // 0
    };
}
var HttpClient4 = /** @class */ (function () {
    function HttpClient4() {
    }
    HttpClient4.prototype.getData = function (uuid) {
        console.log(uuid); // 123
    };
    __decorate([
        __param(0, logParams('xxx'))
    ], HttpClient4.prototype, "getData", null);
    return HttpClient4;
}());
var http4 = new HttpClient4();
http4.getData(123);
//# sourceMappingURL=18-参数装饰器.js.map