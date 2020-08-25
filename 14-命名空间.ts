/*
    解决命名相同的问题
    命名空间里面的成员默认是私有的
 */
namespace A {
    interface Animal {
        name:string;   // 属性
        eat():void;
    }
    export class Cat implements Animal {
        name:string;
        constructor(name:string) {
            this.name = name;
        }
        eat() {
            console.log(`${this.name}在吃猫粮`);
        }
    }
}

namespace B {
    interface Animal {
        name:string;   // 属性
        eat():void;
    }
    export class Cat implements Animal {
        name:string;
        constructor(name:string) {
            this.name = name;
        }
        eat() {
            console.log(`${this.name}在吃鱼`);
        }
    }
}

let c1 = new A.Cat('小明');
let c2 = new B.Cat('小花');
c1.eat();   // 小明在吃猫粮
c2.eat();   // 小花在吃鱼