"use strict";
// 1.
/*interface Config {
    <T>(value:T):T;
}
let getData2:Config = function<T>(value:T):T {
    return value;
};
getData2<string>('小明');*/
function getData2(value) {
    return value;
}
var myGetData = getData2;
myGetData('20');
//# sourceMappingURL=11-泛型接口.js.map