"use strict";
var runs = /** @class */ (function () {
    function runs(name) {
        this.name = name;
    }
    runs.prototype.eat = function () {
        console.log(this.name + '在吃饭');
    };
    runs.prototype.work = function () {
        console.log(this.name + '在写程序');
    };
    return runs;
}());
var r = new runs('小明');
r.eat(); // 小明在吃饭
r.work(); // 小明在写程序
//# sourceMappingURL=09-类接口.js.map