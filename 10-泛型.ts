/*
    使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据
    传入和返回的数据类型需要一致
 */
function getData<T>(arg:T): T {
    return arg;
}
getData<number>(123);
getData<string>('123');

class MinClass<T> {
    list:T[] = [];
    add(value:T):void {
        this.list.push(value);
    }
    min():T {
        let minNum = this.list[0];
        for(let i=0; i<this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    }
}
let m1 = new MinClass<number>();
m1.add(1);
m1.add(41);
m1.add(13);
m1.add(9);
console.log(m1.min());

let m2 = new MinClass<string>();
// m2.add("456468461");
m2.add("asfaf");
// m2.add("78644684");
m2.add("afdv");
console.log(m2.min());



















