/*
    属性装饰器声明在一个属性声明之前（紧靠着属性声明）
    参数
        1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
        2.成员的名字
 */
function logProperty(params: any) {
    return function (target:any, attr:any) {
        console.log(target);
        console.log(attr);   // url
        target[attr] = params;
    }
}

class HttpClient3 {
    @logProperty('http://www.baidu.com')
    url:string | undefined;
    constructor() {
    }
    getData() {
        console.log(this.url);
    }
}
let http3:any = new HttpClient3();
console.log(http3.url);   // http://www.baidu.com