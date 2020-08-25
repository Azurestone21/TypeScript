/*
    抽象类做为其它派生类的基类使用
    一般不会直接被实例化
    抽象方法必须在派生类中实现
 */
abstract class Department {
    name:string;
    constructor(name: string) {
        this.name = name;
    }
    printName(): void {
        console.log('Department name: ' + this.name);
    }
    abstract printMeeting(): void;   // 必须在派生类中实现
}

class technology extends Department {
    constructor() {
        super('technology');   // 在派生类的构造函数中必须调用 super()
    }
    printMeeting(): void {
        console.log('Meets at 10am.');
    }
    generateReports(): void {
        console.log('Generating accounting reports...');
    }
}

let department: Department;   // 允许创建一个对抽象类型的引用
// department = new Department();   // 错误: 不能创建一个抽象类的实例
department = new technology();   // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports();   // 错误: 方法在声明的抽象类中不存在