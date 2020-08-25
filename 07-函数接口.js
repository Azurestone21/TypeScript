"use strict";
// let mySearch: Search;
var mySearch;
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var ms = mySearch('123456789', '123');
console.log(ms); // true
//# sourceMappingURL=07-函数接口.js.map