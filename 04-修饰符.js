"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
    public公有： 默认修饰符，所有成员都可以访问
    protected受保护： 只有本类或者子类可以访问
    private私有： 只有本类内可以访问
    readonly只读：只读属性必须在声明时或构造函数里被初始化
 */
var Phone = /** @class */ (function () {
    function Phone() {
        this.name = 'name';
        this.sex = 'sex';
        this.age = 16;
        this.major = '计算机';
    }
    Phone.prototype.run = function () {
        console.log(this.name);
        console.log(this.sex);
        console.log(this.age);
    };
    return Phone;
}());
var HuaWei = /** @class */ (function (_super) {
    __extends(HuaWei, _super);
    function HuaWei() {
        return _super.call(this) || this;
    }
    HuaWei.prototype.run = function () {
        console.log(this.name);
        console.log(this.sex);
        // console.log(this.age);   // error
    };
    return HuaWei;
}(Phone));
var p = new Phone();
console.log(p.name);
// console.log(p.sex);   // error
// console.log(p.age);   // error
p.run();
var h = new HuaWei();
console.log(h.name);
// console.log(h.sex);   // error
// console.log(h.age);   // error
h.run();
//# sourceMappingURL=04-修饰符.js.map