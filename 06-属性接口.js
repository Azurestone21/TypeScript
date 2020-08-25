"use strict";
/*
    传入的对象参数会包含很多属性，但是编译器只会检查那些必需的属性是否存在，并且其类型是否匹配
 */
function getUser(user, classes) {
    console.log(user.name);
    // console.log(user.major);   // error
    console.log(classes);
}
// 直接在里面添加对象，属性要与接口定义的属性一致
getUser({
    name: '小花',
    sex: '女',
    age: 16,
}, '1班');
/*
    如果先定义对象，再传入函数，对象里面的属性可以比接口定义
    多出的属性可以输出，但是会报错，建议属性与接口的设置一致
 */
var obj = {
    name: '小花',
    sex: '女',
    age: 16,
    major: '计算机'
};
getUser(obj, '2班');
function getStyle(config) {
    var newFont = { font: "", color: '#000000', size: '16px' };
    newFont.font = config.font;
    if (config.color) {
        newFont.color = config.color;
    }
    if (config.size) {
        newFont.size = config.size;
    }
    return newFont;
}
var s = getStyle({
    font: "微软雅黑",
});
console.log(s);
//# sourceMappingURL=06-属性接口.js.map