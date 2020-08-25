/*
    public公有： 默认修饰符，所有成员都可以访问
    protected受保护： 只有本类或者子类可以访问
    private私有： 只有本类内可以访问
    readonly只读：只读属性必须在声明时或构造函数里被初始化
 */
class Phone {
    public name:string = 'name';
    protected sex:string = 'sex';
    private age:number = 16;
    readonly major:string = '计算机';
    constructor() {
    }
    run() {
        console.log(this.name);
        console.log(this.sex);
        console.log(this.age);
    }
}
class HuaWei extends Phone {
    constructor() {
        super();
    }
    run() {
        console.log(this.name);
        console.log(this.sex);
        // console.log(this.age);   // error
    }
}

let p = new Phone();
console.log(p.name);
// console.log(p.sex);   // error
// console.log(p.age);   // error
p.run();
let h = new HuaWei();
console.log(h.name);
// console.log(h.sex);   // error
// console.log(h.age);   // error
h.run();