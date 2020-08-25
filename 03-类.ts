class Animal {
    name:string;   // 属性
    constructor(name:string) {   // 构造函数
        this.name = name;
    }
    run() {   // 方法
        console.log(this.name + '去吃饭了');
    }
}

// 继承
class Dog extends Animal {
    // name:string;
    constructor(name:string) {
        super(name);
    }
    run() {   // 重写
        console.log(this.name + '去跑步了');
    }
}

let an = new Animal('小红');
an.run();   // 小红去吃饭了
let d = new Dog('小明');
d.run();   // 小明去跑步了