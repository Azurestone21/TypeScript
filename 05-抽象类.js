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
    抽象类做为其它派生类的基类使用
    一般不会直接被实例化
    抽象方法必须在派生类中实现
 */
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log('Department name: ' + this.name);
    };
    return Department;
}());
var technology = /** @class */ (function (_super) {
    __extends(technology, _super);
    function technology() {
        return _super.call(this, 'technology') || this;
    }
    technology.prototype.printMeeting = function () {
        console.log('Meets at 10am.');
    };
    technology.prototype.generateReports = function () {
        console.log('Generating accounting reports...');
    };
    return technology;
}(Department));
var department; // 允许创建一个对抽象类型的引用
// department = new Department();   // 错误: 不能创建一个抽象类的实例
department = new technology(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports();   // 错误: 方法在声明的抽象类中不存在
//# sourceMappingURL=05-抽象类.js.map