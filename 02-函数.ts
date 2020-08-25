// 命名函数
function add1(x:number, y:number):number {
    return x+y;
}
console.log(add1(1,2));   // 3

// 匿名函数
let add2 = function (x:number, y:number):number {
    return x+y;
};
console.log(add1(1,2));   // 3

// 可选参数
// 变量后面加上？，表示是可选参数，可以不传参
// 可选参数必须跟在必须参数后面
function buildName1(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
let name1 = buildName1("Bob");
let name2 = buildName1("Bob", "Adams");
console.log(name1);   // Bob
console.log(name2);   // Bob Adams

// 默认参数
// 变量先赋值，传参改变值
function buildName2(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}
let name3 = buildName2("Bob");
let name4 = buildName2("Bob", undefined);
let name5 = buildName2("Bob", "Adams");
console.log(name3);   // Bob Smith
console.log(name4);   // Bob Smith
console.log(name5);   // Bob Adams

// 剩余参数
// 接收不知个数的参数
function getList(a:number, ...b:number[]) {
    return a + ' ' + b.join(' ');
}
let list = getList(0,1,2,3);
console.log(list);   // 0 1 2 3










