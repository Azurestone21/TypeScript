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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.run = function () {
        console.log(this.name + '去吃饭了');
    };
    return Animal;
}());
// 继承
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    // name:string;
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.run = function () {
        console.log(this.name + '去跑步了');
    };
    return Dog;
}(Animal));
var an = new Animal('小红');
an.run(); // 小红去吃饭了
var d = new Dog('小明');
d.run(); // 小明去跑步了
//# sourceMappingURL=03-类.js.map