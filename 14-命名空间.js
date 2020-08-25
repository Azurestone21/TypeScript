"use strict";
/*
    解决命名相同的问题
    命名空间里面的成员默认是私有的
 */
var A;
(function (A) {
    var Cat = /** @class */ (function () {
        function Cat(name) {
            this.name = name;
        }
        Cat.prototype.eat = function () {
            console.log(this.name + "\u5728\u5403\u732B\u7CAE");
        };
        return Cat;
    }());
    A.Cat = Cat;
})(A || (A = {}));
var B;
(function (B) {
    var Cat = /** @class */ (function () {
        function Cat(name) {
            this.name = name;
        }
        Cat.prototype.eat = function () {
            console.log(this.name + "\u5728\u5403\u9C7C");
        };
        return Cat;
    }());
    B.Cat = Cat;
})(B || (B = {}));
var c1 = new A.Cat('小明');
var c2 = new B.Cat('小花');
c1.eat(); // 小明在吃猫粮
c2.eat(); // 小花在吃鱼
//# sourceMappingURL=14-命名空间.js.map