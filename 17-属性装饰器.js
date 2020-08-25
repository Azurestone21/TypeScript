"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
    属性装饰器声明在一个属性声明之前（紧靠着属性声明）
    参数
        1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
        2.成员的名字
 */
function logProperty(params) {
    return function (target, attr) {
        console.log(target);
        console.log(attr); // url
        target[attr] = params;
    };
}
var HttpClient3 = /** @class */ (function () {
    function HttpClient3() {
    }
    HttpClient3.prototype.getData = function () {
        console.log(this.url);
    };
    __decorate([
        logProperty('http://www.baidu.com')
    ], HttpClient3.prototype, "url", void 0);
    return HttpClient3;
}());
var http3 = new HttpClient3();
console.log(http3.url); // http://www.baidu.com
//# sourceMappingURL=17-属性装饰器.js.map