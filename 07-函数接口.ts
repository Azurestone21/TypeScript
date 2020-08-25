// 使用接口表示函数类型
// 函数的参数名不需要与接口里定义的名字相匹配
interface Search {
    (source: string, subString: string): boolean;
}
// let mySearch: Search;
let mySearch: Search;
mySearch = function(src: string, sub: string) {
    let result = src.search(sub);
    return result > -1;
};
let ms = mySearch('123456789','123');
console.log(ms);   // true


















