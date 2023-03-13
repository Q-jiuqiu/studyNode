"use strict";
/*
 * @Author: quling
 * @Date: 2023-03-04 15:43:31
 * @LastEditors: quling
 * @LastEditTime: 2023-03-13 21:24:16
 * @Description: file content
 * @FilePath: \studyNode\Typescript\00_数据类型.ts
 */
// 数字类型
function fun() {
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
    // console.log(str);
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
    // 数据类型的包含类型（从大到小）
    // 1、any、unknown——顶级类型
    // 2、Object
    // 3、Number、String、Boolean
    // 4、number、string、boolean
    // 5、1   “QL”   false
    // 6、never
    let anyAugment = []; //不会报错,因为any类型包含Array
    anyAugment = 1;
    anyAugment = Symbol(1);
    anyAugment = false;
    // any类型可以随意复制，any复制给其他类型或者其他类型赋值给any都不会报错
    let a = 1;
    let b = 2;
    // 赋值不会报错
    a = b;
    b = a;
    let c = 1;
    c = b;
    // b = c;报错 任意值可以赋值给unknown，但是unknown只能赋值给自身或者any
    a = c;
    let xiaoMan = { name: "Mike", open: () => 123 };
    // console.log(xiaoMan.name); // 报错:“xiaoMan”的类型为“未知”。 unknown没有属性值、方法的概念
    // xiaoMan.open(); // 报错:“xiaoMan”的类型为“未知”。
    let xiaoMan2 = { name: "Mike", open: () => 123 };
    // console.log(xiaoMan2.name); // 不会报错
    // console.log(xiaoMan2.open()); // 不会报错
}
// Object、object、{} 的理解
function fun1() {
    // Object
    let a = 123;
    let a1 = "123";
    let a2 = false;
    let a3 = [1, "33"];
    let a4 = {};
    let a5 = () => { };
    // object
    // let b: object = "1"; // 错误的 原始类型
    // let b1: object = false; // 错误的 原始类型
    // let b2: object = 1; // 错误的 原始类型
    let b3 = []; // 引用类型
    let b4 = () => { }; // 应用类型
    let b5 = {};
    // {}
    let c = 123;
    let c1 = "123";
    let c2 = false;
    let c3 = [1, "33"];
    let c4 = {};
    let c5 = () => {
        name: "222";
    };
    // c5.name = 444; //报错 类型“{}”上不存在属性“name”。
    c5 = { fff: "dfjafdj" };
}
// 接口和对象类型
function fun2() {
    // 不能将类型“(name: number) => number[]”分配给类型“Fn”
    // const fn: Fn = function (name: number) {
    //   return [1];
    // };
    const fn = function (name) {
        return [1];
    };
    let c = {
        name: "123",
        xxx: "2334",
    };
    // 接口
    let a = {
        name: "Mike",
        // age: 13, //不能将类型“{ name: string; age: number; }”分配给类型“Axxx”。 对象字面量只能指定已知属性，并且“age”不在类型“Axxx”中。
        sex: "male",
        // 不进行校验 对应的是proName
        b: "ww",
        // address: "四川", // 可选参数,不写也不会报错
        cb: () => {
            return false;
        },
    };
    // a.cb = 123; // 报错 无法为“cb”赋值，因为它是只读属性。
}
// 数组类型
function fun3() {
    // 用于定义普通类型的数组
    // 1.[]
    let arr = [1, 2, 3]; // 数字数组
    // 2.泛型
    let arr1 = ["fdkjfah", "dd"]; // 字符串数组
    let arr2 = [{ name: "胡萝卜" }];
    let arr3 = [{ name: "胡萝卜" }];
    // 定义多维数组
    let arr4 = [[[1]], [[3]], [[3]]]; // 表示三维数字数组
    let arr5 = [[[1]], [[3]], [[3]]]; // 三维数字数组
    // 大杂烩数组
    let arr6 = [true, 1, "111"];
    // 使用元组范式定义大杂烩数组 弊端是:1.书写麻烦;2.数组长度固定
    let arr7 = [true, 1, "111"];
    function fun(...args) {
        console.log(args);
        console.log(arguments); // arguments是一个类数组
        // let a: any[] = arguments; // 因为arguments是类数组,没有数组相关的方法.类型“IArguments”缺少类型“any[]”的以下属性: pop, push, concat, join 及其他 24 项
        let a = arguments;
    }
    fun(1, 2, 3); // [1,2,3] 结构出来为数组
}
// 函数扩展
function fun4() {
    // 1.定义函数类型和返回 | 箭头函数定义类型和返回值
    function add(a, b) {
        return a + b;
    }
    console.log(add(1, 2));
    const add2 = (a, b) => {
        return a + b;
    };
    // 2.函数默认参数  |  函数可选参数
    function add3(a = 10, b = 20) {
        return a + b;
    }
    function add4(a = 10, b) {
        // return a + b // “b”可能为“未定义”。
        return a;
    }
    function add5(user) {
        return user;
    }
    console.log(add5({
        name: "Mike",
        age: 10
    }));
    // ts可以定义this的类型 在js中无法使用 必须是第一个参数定义this的类型 传参是自动忽略第一个参数this
    let obj = {
        users: [1, 2, 3],
        add(user) {
            this.users.push(user);
        }
    };
    obj.add(4);
    console.log(obj);
    // 5.函数重载 重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。
    let user = [1, 2, 3, 4];
    // 实现函数
    function findNum(ids) {
        if (typeof ids === "number") {
            return user.filter(v => v === ids);
        }
        else if (Array.isArray(ids)) {
            user.push(...ids);
        }
        return user;
    }
    console.log(findNum());
    console.log(findNum(3));
    console.log(findNum([4, 5, 6]));
}
// fun4()
// 类型断言、联合类型、交叉类型
function fun5() {
    // 联合类型
    let phone = "012-2334";
    let fn = (type) => {
        return !!type; // 强转成布尔类型
    };
    fn(1);
    const xiaoMan = (man) => {
        console.log(man); // man具有Person和Man的所有属性 类似于extends
    };
    xiaoMan({
        name: "Mike",
        age: 12,
        sex: 1
    });
    // 类型断言 并不会改变参数类型,只能够"欺骗"Typescript编辑器,无法避免错误
    let fn1 = (num) => {
        // console.log(num.length); // 类型“number”上不存在属性“length”。
        // 第一种类型断言写法
        console.log(num.length);
        // 第二种类型断言写法
        console.log(num.length);
    };
    fn1("1223"); // 结果 4
    fn1(1223); // 结果 undefined
    // any临时断言
    // window.abc = 123 // 类型“Window & typeof globalThis”上不存在属性“abc”
    window.abc = 123; // 使用any临时断言的变量,访问任何属性都是允许的
    // as const
    const names = "QL";
    // names = "XM"; // 无法分配到 "names" ，因为它是常数。
    let names2 = "QL";
    // names2 = "XM"; //不能将类型“"XM"”分配给类型“"QL"”
    let a1 = [12, 20];
    const a2 = [12, 20];
    // a1.push(11); // 类型“readonly [12, 20]”上不存在属性“push”。 数据无法修改
    a2.push(11);
}
// fun5()
// 内置对象
function fun6() {
    // Ts是由三部分组成:ECMAscript、DOM、BOM
    // let num: number = new Number(1); // 不能将类型“Number”分配给类型“number”。
    // 1.ecma 当使用new关键字时,变量类型就为new的实例名 let argument: XX = new XX()
    let num = new Number(1);
    let date = new Date();
    let reg = new RegExp("\w");
    let xhr = new XMLHttpRequest();
    // 2.dom 操作文档节点的相关对象
    // 变量类型为:HTML(标签名称)Element HTMLElement Element
    let div = document.querySelector("div");
    // 变量类型为:NodeList  NodeListOf<HTMLDivElement>
    let divList = document.querySelectorAll("div");
    // bom 操作浏览的相关对象
    let local = localStorage;
    let lo = location;
    let promise = new Promise((resolve) => resolve(1)); // promise返回的是一个数值类型的值
    promise.then(res => { });
    let cookie = document.cookie;
}
