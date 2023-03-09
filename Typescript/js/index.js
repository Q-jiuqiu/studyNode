"use strict";
// 数字类型
let num = 11.2;
let num1 = NaN;
let numI = Infinity; // 无穷大
let num2 = 0xf00d; // 十六进制数
let num3 = 0xb1011; // 二进制数
let num4 = 0xb4071; // 八进制数
let Num = 1;
// 布尔类型
// let bool: boolean = new Boolean(1); // 错误 注意，使用构造函数 Boolean 创造的对象不是布尔值,new Boolean() 返回的是一个Boolean对象。不能将类型“Boolean”分配给类型“boolean”。 “boolean”是基元，但“Boolean”是包装器对象。如可能首选使用“boolean”。
let bool1 = true;
let bool2 = Boolean(1);
// 字符串类型
let str = `QL${num4}`;
console.log(str);
// 空值类型
function voidFn() {
    console.log("返回空值");
}
let u = undefined;
// Null与undefined
let n1 = null;
let u1 = undefined;
//这样写会报错 void类型不可以分给其他类型
// str = u; // 不能将类型“void”分配给类型“string”。
//这样是没问题的
// str = n1; // 严格模式下会报错; 非严格模式下不会报错
//或者这样的
// str = u1 // 严格模式下会报错; 非严格模式下不会报错
