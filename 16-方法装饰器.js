"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
    方法装饰器声明在一个方法的声明之前（紧靠着方法声明）
    参数
        1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
        2.成员的名字
        3.成员的属性描述符
 */
function logMethods(params) {
    return function (target, methodName, desc) {
        console.log(target);
        console.log(methodName); // getData
        console.log(desc);
        // 修改装饰器的方法
        var oMethod = desc.value;
        desc.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            args = args.map(function (value) {
                return String(value);
            });
            console.log(args); // ["123", "abc"]
            oMethod.apply(this, args);
        };
    };
}
var HttpClient2 = /** @class */ (function () {
    function HttpClient2() {
    }
    HttpClient2.prototype.getData = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log('getData方法'); // getData方法
    };
    __decorate([
        logMethods('http://www.baidu.com')
    ], HttpClient2.prototype, "getData", null);
    return HttpClient2;
}());
var http2 = new HttpClient2();
http2.getData(123, 'abc');
//# sourceMappingURL=16-方法装饰器.js.map