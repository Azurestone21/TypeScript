"use strict";
// typescript中定义变量必须定义数据类型，并且赋值的数据类型必须和定义的数据类型一致
// 布尔值
var bool = true;
console.log(bool); // true
// 数字
var num1 = 7;
var num2 = 7.5;
var num3 = 0xffff;
var num4 = 10;
var num5 = 484;
console.log(num1); // 7
console.log(num2); // 7.5
console.log(num3); // 65535
console.log(num4); // 10
console.log(num5); // 484
// 字符串
var str = '123';
console.log(str); // 123
// 数组
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
console.log(list1); // [1,2,3]
console.log(list2); // [1,2,3]
// 元组
// 可以定义每个元素的数据类型，赋值的时候需要一一对应
var t;
t = ['123', 123];
console.log(t); // ['123',123]
// 枚举
// 默认情况下，值从0开始，也可以手动赋值
// 没有赋值的变量的值会在前面赋值的变量的值上加1
var enum1;
(function (enum1) {
    enum1[enum1["a"] = 0] = "a";
    enum1[enum1["b"] = 1] = "b";
    enum1[enum1["c"] = 2] = "c";
})(enum1 || (enum1 = {}));
var enum2;
(function (enum2) {
    enum2[enum2["a"] = 1] = "a";
    enum2[enum2["b"] = 2] = "b";
    enum2[enum2["c"] = 2] = "c";
})(enum2 || (enum2 = {}));
var enum3;
(function (enum3) {
    enum3[enum3["a"] = 0] = "a";
    enum3[enum3["b"] = 7] = "b";
    enum3[enum3["c"] = 8] = "c";
})(enum3 || (enum3 = {}));
console.log(enum1); // a=0,b=1,c=2
console.log(enum2); // a=1,b=2,c=2
console.log(enum3); // a=0,b=7,c=8
console.log(enum3.a); // 0
// any
// 定义any 可以传任何类型的值
var a;
a = '123';
var list3 = [1, true, "str"];
console.log(a); // 123
console.log(list3); // [1, true, "str"]
// void 没有类型
// 一般用在函数上，如果用在变量是，只能赋值undefined和null
var v = undefined;
function f() {
    console.log("没有返回值的函数");
}
console.log(v); // undefined
f(); // 没有返回值的函数
// null
var n = null;
console.log(n); // null
// undefined
var u = undefined;
console.log(u); // undefined
// 联合类型
// 使用这种类型可以接收可能是字符串或者undefined的值
var l; // 可以联合其他的数据类型
console.log(l); // undefined
// never
/*
    不存在的值的类型
    是任何类型的子类型
    可以赋值给任何类型
 */
// object
//# sourceMappingURL=01-基本类型.js.map