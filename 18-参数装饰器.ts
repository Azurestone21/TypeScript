/*
    参数装饰器声明在一个参数声明之前（紧靠着参数声明）
    参数
        对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
        成员的名字
        参数在函数参数列表中的索引
 */
function logParams(params: any) {
    return function (target:any, paramsName:any, paramsIndex:any) {
        console.log(target);
        console.log(paramsName);   // getData
        console.log(paramsIndex);   // 0
    }
}

class HttpClient4 {
    url:string | undefined;
    constructor() {
    }
    getData(@logParams('xxx') uuid:any) {
        console.log(uuid);   // 123
    }
}
let http4:any = new HttpClient4();
http4.getData(123);