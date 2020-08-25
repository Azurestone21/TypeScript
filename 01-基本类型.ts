// typescript中定义变量必须定义数据类型，并且赋值的数据类型必须和定义的数据类型一致

// 布尔值
let bool:boolean = true;
console.log(bool);  // true

// 数字
let num1:number = 7;
let num2:number = 7.5;
let num3:number = 0xffff;
let num4:number = 0b1010;
let num5:number = 0o744;
console.log(num1);  // 7
console.log(num2);  // 7.5
console.log(num3);  // 65535
console.log(num4);  // 10
console.log(num5);  // 484

// 字符串
let str:string = '123';
console.log(str);   // 123

// 数组
let list1:number[] = [1,2,3];
let list2:Array<number> = [1,2,3];
console.log(list1);   // [1,2,3]
console.log(list2);   // [1,2,3]

// 元组
// 可以定义每个元素的数据类型，赋值的时候需要一一对应
let t:[string,number];
t = ['123',123];
console.log(t);   // ['123',123]

// 枚举
// 默认情况下，值从0开始，也可以手动赋值
// 没有赋值的变量的值会在前面赋值的变量的值上加1
enum enum1 {a,b,c}
enum enum2 {a=1,b,c=2}
enum enum3 {a=0,b=7,c}
console.log(enum1);  // a=0,b=1,c=2
console.log(enum2);  // a=1,b=2,c=2
console.log(enum3);  // a=0,b=7,c=8
console.log(enum3.a);   // 0

// any
// 定义any 可以传任何类型的值
let a:any;
a = '123';
let list3: any[] = [1, true, "str"];
console.log(a);   // 123
console.log(list3);   // [1, true, "str"]

// void 没有类型
// 一般用在函数上，如果用在变量是，只能赋值undefined和null
let v:void = undefined;
function f(): void {
    console.log("没有返回值的函数");
}
console.log(v);   // undefined
f();   // 没有返回值的函数

// null
let n:null = null;
console.log(n);   // null
// undefined
let u:undefined = undefined;
console.log(u);   // undefined

// 联合类型
// 使用这种类型可以接收可能是字符串或者undefined的值
let l:string | undefined;   // 可以联合其他的数据类型
console.log(l);   // undefined

// never
/*
    不存在的值的类型
    是任何类型的子类型
    可以赋值给任何类型
 */

// object











