"use strict";
/*
    使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据
    传入和返回的数据类型需要一致
 */
function getData(arg) {
    return arg;
}
getData(123);
getData('123');
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (value) {
        this.list.push(value);
    };
    MinClass.prototype.min = function () {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    };
    return MinClass;
}());
var m1 = new MinClass();
m1.add(1);
m1.add(41);
m1.add(13);
m1.add(9);
console.log(m1.min());
var m2 = new MinClass();
// m2.add("456468461");
m2.add("asfaf");
// m2.add("78644684");
m2.add("afdv");
console.log(m2.min());
//# sourceMappingURL=10-泛型.js.map