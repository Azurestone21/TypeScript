/*
    接口描述了类的公共部分
    一个接口可以继承多个接口
 */
interface Animals {
    eat():void;
}
interface Person extends Animals {
    work():void;
}
class runs implements Person {
    name:string;
    constructor(name:string) {
        this.name = name;
    }
    eat() {
        console.log(this.name + '在吃饭');
    }
    work() {
        console.log(this.name + '在写程序');
    }
}
let r = new runs('小明');
r.eat();   // 小明在吃饭
r.work();   // 小明在写程序