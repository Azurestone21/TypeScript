/*
    方法装饰器声明在一个方法的声明之前（紧靠着方法声明）
    参数
        1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
        2.成员的名字
        3.成员的属性描述符
 */
function logMethods(params: any) {
    return function (target:any, methodName:any, desc:any) {
        console.log(target);
        console.log(methodName);   // getData
        console.log(desc);
        // 修改装饰器的方法
        let oMethod = desc.value;
        desc.value = function (...args:any[]) {
            args = args.map(value => {
                return String(value);
            });
            console.log(args);   // ["123", "abc"]
            oMethod.apply(this,args);
        }
    }
}

class HttpClient2 {
    url:string | undefined;
    constructor() {
    }
    @logMethods('http://www.baidu.com')
    getData(...args:any[]) {
        console.log('getData方法');   // getData方法
    }
}
let http2:any = new HttpClient2();
http2.getData(123,'abc');
