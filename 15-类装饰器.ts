/*
    可以扩展类、方法、属性、参数的功能
    本身是一个方法
    分类：类装饰器、属性装饰器、方法装饰器、参数装饰器
    普通装饰器：无法传参
    装饰器工厂：可以传参
 */

/*
    类装饰器在类声明之前被声明（紧靠着类声明）
    参数
        1.类的构造函数
 */
// 1.类装饰器 普通装饰器
/*function logClass(params: any) {
    // params是当前类
    console.log(params);
    params.prototype.url = '动态扩展的属性';
    params.prototype.run = function () {
        console.log('进入run方法');
    }
}

@logClass
class HttpClient {
    constructor() {
    }
    getData() {
    }
}
let http:any = new HttpClient();
console.log(http.url);   // 动态扩展的属性
http.run();   // 进入run方法
*/

// 2. 类装饰器 装饰器工厂
function logClass(params: any) {
    return function(target:any) {
        // params是传入的参数
        console.log(params);   // http://www.baidu.com
        // target是当前类
        console.log(target);
        target.prototype.url = params;
        target.prototype.run = function () {
            console.log('进入run方法');
        }
    }
}

@logClass('http://www.baidu.com')
class HttpClient {
    constructor() {
    }
    getData() {
    }
}
let http:any = new HttpClient();
console.log(http.url);   // http://www.baidu.com

// 3. 类装饰器 重载
/*function logClass(target: any) {
    console.log(target);
    return class extends target {
        url:any = '修改后的url';
        getData() {
        }
    }
}

@logClass
class HttpClient {
    url:string | undefined;
    constructor() {
        this.url = '原来的url'
    }
    getData() {
        console.log('原来的数据');
    }
}
let http:any = new HttpClient();
console.log(http.url);   // 修改后的url*/


















