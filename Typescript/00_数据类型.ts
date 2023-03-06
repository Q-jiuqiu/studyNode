/*
 * @Author: quling
 * @Date: 2023-03-04 15:43:31
 * @LastEditors: quling
 * @LastEditTime: 2023-03-06 22:00:19
 * @Description: file content
 * @FilePath: \studyNode\Typescript\00_数据类型.ts
 */
// 数字类型
let num: number = 11.2;
let num1: number = NaN;
let numI: number = Infinity; // 无穷大
let num2: number = 0xf00d; // 十六进制数
let num3: number = 0xb1011; // 二进制数
let num4: number = 0xb4071; // 八进制数
let Num: Number = 1;

// 布尔类型
// let bool: boolean = new Boolean(1); // 错误 注意，使用构造函数 Boolean 创造的对象不是布尔值,new Boolean() 返回的是一个Boolean对象。不能将类型“Boolean”分配给类型“boolean”。 “boolean”是基元，但“Boolean”是包装器对象。如可能首选使用“boolean”。
let bool1: boolean = true;
let bool2: boolean = Boolean(1);

// 字符串类型
let str: string = `QL${num4}`;
// console.log(str);

// 空值类型
function voidFn(): void {
  console.log("返回空值");
}
let u: void = undefined;

// Null与undefined
let n1: null = null;
let u1: undefined = undefined;

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

let anyAugment: any = []; //不会报错,因为any类型包含Array
anyAugment = 1;
anyAugment = Symbol(1);
anyAugment = false;

// any类型可以随意复制，any复制给其他类型或者其他类型赋值给any都不会报错
let a: any = 1;
let b: number = 2;
// 赋值不会报错
a = b;
b = a;
let c: unknown = 1;
c = b;
// b = c;报错 任意值可以赋值给unknown，但是unknown只能赋值给自身或者any
a = c;

let xiaoMan: unknown = { name: "Mike", open: () => 123 };
// console.log(xiaoMan.name); // 报错:“xiaoMan”的类型为“未知”。 unknown没有属性值、方法的概念
// xiaoMan.open(); // 报错:“xiaoMan”的类型为“未知”。

let xiaoMan2: any = { name: "Mike", open: () => 123 };
// console.log(xiaoMan2.name); // 不会报错
// console.log(xiaoMan2.open()); // 不会报错

// Object、object、{} 的理解
function fun1() {
  // Object
  let a: Object = 123;
  let a1: Object = "123";
  let a2: Object = false;
  let a3: Object = [1, "33"];
  let a4: Object = {};
  let a5: Object = () => {};
  // object
  // let b: object = "1"; // 错误的 原始类型
  // let b1: object = false; // 错误的 原始类型
  // let b2: object = 1; // 错误的 原始类型
  let b3: object = []; // 引用类型
  let b4: object = () => {}; // 应用类型
  let b5: object = {};
  // {}
  let c: {} = 123;
  let c1: {} = "123";
  let c2: {} = false;
  let c3: {} = [1, "33"];
  let c4: {} = {};
  let c5: {} = () => {
    name: "222";
  };
  // c5.name = 444; //报错 类型“{}”上不存在属性“name”。
  c5 = { fff: "dfjafdj" };
}

// 接口和对象类型
function fun2() {
  // 必须完全一样,不能多属性,也能少
  interface Axxx {
    name: string;
  }
  // 1.重名 取并集
  interface Axxx {
    sex: string;
    // 2.任意key 索引签名 表示proName为key,只要是字符创即可
    [proName: string]: any; // 如果[proName: string]: string;你们Axxx对应的所有value都为string类型
    // 3.可选操作符  readOnly
    address?: string; // address为可选参数
    readonly cb: () => boolean; // cb为只读参数不可修改
  }
  // 4.继承
  // interface Cxxx extends B, Axxx {
  interface Cxxx extends B{
    name: string;
  }
  interface B {
    xxx: string;
  }

  // 5.定义函数
  // 定义一个函数,传入参数为name,返回一个数字数组
  interface Fn {
    (name: string): number[];
  }
  // 不能将类型“(name: number) => number[]”分配给类型“Fn”
  // const fn: Fn = function (name: number) {
  //   return [1];
  // };
  const fn: Fn = function (name: string) {
    return [1];
  };

  let c: Cxxx = {
    name: "123",
    xxx: "2334",
  };

  // 接口
  let a: Axxx = {
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

