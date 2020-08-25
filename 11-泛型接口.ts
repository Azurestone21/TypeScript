// 1.
/*interface Config {
    <T>(value:T):T;
}
let getData2:Config = function<T>(value:T):T {
    return value;
};
getData2<string>('小明');*/

// 2.
interface Config<T> {
    (value:T):T;
}
function getData2<T>(value:T):T {
    return value;
}
let myGetData:Config<string> = getData2;
myGetData('20');


















