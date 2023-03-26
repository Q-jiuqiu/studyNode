"use strict";
// 元组类型
function fun1() {
    // 数组的变种 不同之处在于:数组长度不固定 元组长度固定,并且类型可以不同
    // let arr: any[] = [1, false]
    let arr = [1, false];
    // let arr: readonly [number, boolean] = [1, false] // 改变值和数组长度是被禁止的
    arr[0] = 66;
    // arr[0] = "stirng" 不能将类型“string”分配给类型“number”。
    arr.push(2); // 只能插入数字或者布尔值,因为数组被判断为数值和布尔值的联合类型
    // arr[2] // 报错 长度为 "2" 的元组类型 "[number, boolean]" 在索引 "2" 处没有元素. 即使push了一个参数但是任然出现元组越界的情况
    let arr2 = [1];
    // 多维数组的定义
    let excel = [
        ["小满", "女", 1],
        ["小满", "女", 1]
    ];
}
// 枚举类型
function fun2() {
    // 关键字 enum
    // 1.数字枚举
    let Color;
    (function (Color) {
        Color[Color["red"] = 0] = "red";
        Color[Color["green"] = 1] = "green";
        Color[Color["blue"] = 2] = "blue";
    })(Color || (Color = {}));
    console.log(Color.red); // 0
    console.log(Color.green); // 1
    console.log(Color.blue); // 2
    console.log("====");
    // 2.增加枚举
    let Color1;
    (function (Color1) {
        Color1[Color1["red"] = 1] = "red";
        Color1[Color1["green"] = 2] = "green";
        Color1[Color1["blue"] = 3] = "blue";
    })(Color1 || (Color1 = {}));
    console.log(Color1.red); // 1
    console.log(Color1.green); // 2
    console.log(Color1.blue); // 3
    console.log("====");
    // 3.自定义枚举
    let Color2;
    (function (Color2) {
        Color2[Color2["red"] = 1] = "red";
        Color2[Color2["green"] = 4] = "green";
        Color2[Color2["blue"] = 5] = "blue";
    })(Color2 || (Color2 = {}));
    console.log(Color2.red); // 1
    console.log(Color2.green); // 4
    console.log(Color2.blue); // 5
    console.log("====");
    // 4.字符串枚举 每个枚举值都要赋值 因为字符串枚举没有自增长的行为
    let Color3;
    (function (Color3) {
        Color3["red"] = "red";
        Color3["green"] = "green";
        Color3["blue"] = "blue";
    })(Color3 || (Color3 = {}));
    console.log(Color3.red); // red
    console.log(Color3.green); // green
    console.log(Color3.blue); // blue
    console.log("====");
    // 5.异构枚举
    let Color4;
    (function (Color4) {
        Color4[Color4["yes"] = 1] = "yes";
        Color4["no"] = "no";
    })(Color4 || (Color4 = {}));
    console.log(Color4.yes); // 1
    console.log(Color4.no); // no
    console.log("====");
    let obj = {
        // red: 1
        red: Color.red
    };
    let code = 0;
    if (code === 0 /* Types.success */) { }
    let Types1;
    (function (Types1) {
        Types1[Types1["success"] = 0] = "success";
        Types1[Types1["fail"] = 1] = "fail";
    })(Types1 || (Types1 = {}));
    let code1 = 0;
    if (code1 === Types1.success) { }
    // 8.反向映射 可以通过key来读取value 也可以通过value来读取key 前提是不能使用const来修饰 字符串枚举是没办法进行反射的
    let Types2;
    (function (Types2) {
        Types2[Types2["success"] = 0] = "success";
        Types2[Types2["fail"] = 1] = "fail";
    })(Types2 || (Types2 = {}));
    let success = Types2.success;
    let key = Types2[success];
    console.log("key:", key, "-value:", success); // 0
}
// 类型推论、类型别名
function fun3() {
    // 类型推论: 在定义变量时没有明确指出变量类型,ts会通过复制推断出一个类型
    let num = 1; // let num: number
    // num = "sti" // 报错 不能将类型“string”分配给类型“number”。
    // 当定义了值但是没有赋值时,默认推断为any
    let str;
    str = null;
    str = 12;
    let name = "QL";
    let name1 = "QL";
    // 为什么num1到num4都为1,而num5为0. 这与类型的包含关系有关
}
// never类型
function fun4() {
    function xm() {
        throw new Error("小米");
    }
    function kun(value) {
        switch (value) {
            case "唱":
                break;
            case "跳":
                break;
            case "rap":
                break;
            default:
                // 兜底逻辑
                const error = value;
                break;
        }
    }
}
// Symbol
function fun5() {
    // 1.Symbol定义唯一值
    let a1 = Symbol(1);
    let a2 = Symbol(1);
    console.log(a1 === a2); // false
    console.log(a1 == a2); // false
    // for Symbol for会全局symbol有没有注册过这个key 如果有这个key就直接拿来使用了 如果没有则去创建一个Symbol
    console.log(Symbol.for("XiaoMan") === Symbol.for("XiaoMan")); // true
    // 使用场景
    // 2.避免对象内key值重复
    let obj = {
        name: 1,
        // name: 2 // 对象文本不能具有多个名称相同的属性
        [a1]: 11,
        [a2]: 22
    };
    console.log(obj); // { name: 1, [Symbol(1)]: 11, [Symbol(1)]: 22 }
    // for in 不能读到symbol
    for (let key in obj) {
        console.log(key); // 输出->name 
    }
    // Object.keys 不能读到symbol
    console.log(Object.keys(obj)); // 输出->['name']
    console.log(Object.getOwnPropertyNames(obj)); // 输出->['name']
    // Object.getOwnPropertySymbols 只能读到symbol
    console.log(Object.getOwnPropertySymbols(obj)); // 输出->[ Symbol(1), Symbol(1) ]
    // 3.Reflect.ownKeys()
    console.log(Reflect.ownKeys(obj)); // 输出->[ 'name', Symbol(1), Symbol(1) ]
    // 4.生成器
    function* gen() {
        yield Promise.resolve("小满"); // yield后跟同步或异步
        yield "大满"; // yield后跟同步或异步
        yield "超大满"; // yield后跟同步或异步
        yield "无敌大满"; // yield后跟同步或异步
    }
    const man = gen();
    console.log(man.next()); // { value: Promise { '小满' }, done: false }
    console.log(man.next()); // { value: 大满, done: false }
    console.log(man.next()); // { value: 超大满, done: false }
    console.log(man.next()); // { value: 无敌大满, done: false }
    console.log(man.next()); // { value: undefined, done: true } done为true表示没有东西可以迭代了
    // 5.迭代器 symbol.
    // map、set、weakMap、weakSet
    let set = new Set([1, 2, 2, 3, 3]); // 天然去重的 1,2,3 只支持数字和字符串,对象不支持去重
    let map = new Map();
    let Arr = [1, 2, 3];
    map.set(Arr, "小满");
    console.log(map.get(Arr)); // 输出->小满
    function args() {
        console.log(arguments); // 伪数组
    }
    // let list = document.querySelectorAll("div") // 伪数组或者类数组 也是具有迭代器的
    const each = (value) => {
        let It = value[Symbol.iterator](); // 与生成器一样具有next方法,并且通过next方法进行"遍历",返回一个对象->{value:xxx,done:false/true}
        let next = { done: false };
        while (!next.done) {
            next = It.next();
            console.log(next.value);
        }
    };
    each(map); // [ [ 1, 2, 3 ], '小满' ] undefined // key为[ 1, 2, 3 ],value为'小满'
    each(set); // 1 2 3 undefined
    // 6.迭代器的语法糖 ->for of ->底层实现逻辑为each函数
    // 特别注意for of 对象不可用 因为对象上没有迭代器Symbol.iterator方法
    for (const iterator of set) {
        console.log(iterator);
    }
    // 7.解构
    let [a, b, c] = [4, 5, 6];
    console.log(a, b, c); // 输出-> 4,5,6
    console.log(...[4, 5, 6]);
    // 数组解构的底层原理为: 调用Symbol.iterator
    // 8.对象支持for of
    let obj1 = {
        max: 5,
        current: 0,
        [Symbol.iterator]() {
            return {
                max: this.max,
                current: this.current,
                next() {
                    if (this.current == this.max) {
                        return {
                            value: undefined,
                            done: true
                        };
                    }
                    else {
                        return {
                            value: this.current++,
                            done: false
                        };
                    }
                }
            };
        }
    };
    for (let value of obj1) {
        console.log(value); //输出 0,1,2,3,4
    }
    // 数组解构
    let x = [...obj1];
    console.log(x); // 输出结果为: [0,1,2,3,4]
    // 对象解构
    let y = Object.assign({}, obj1);
    console.log(y);
    // 输出结果为:
    // {
    //   max: 5,
    //   current: 0,
    //   [Symbol(Symbol.iterator)]: [Function: [Symbol.iterator]]
    // }
}
// 泛型-动态类型 <名字> 相当于占位符
function fun6() {
    function Fun1(a, b) {
        return [a, b];
    }
    function Fun2(a, b) {
        return [a, b];
    }
    // Fun1与Fun2代码逻辑相同,传参和返回都类似,重复书写  -->泛型就是为了解决这一问题
    function Fun(a, b) {
        return [a, b];
    }
    Fun(1, 2); // 此时T的动态类型为number
    // Fun(1, "1") // 类型“string”的参数不能赋给类型“number”的参数。 T不能即使number又是string
    Fun("1", "1"); // 此时T的动态类型为string
    let a = true; // 相当于 type A<T> = string | number | boolean
    let a1 = undefined;
    let a2 = null;
    let data = {
        msg: "1111",
        name: "222"
    };
    // 泛型的高级用法
    function add(a, b) {
        return [a, b];
    }
    add(1, false); // T为number K为boolean
    // 泛型也可有默认值
    function add1(a, b) {
        return [a, b];
    }
    add1(1, "false"); // T为number K为string
    const axios = {
        get(url) {
            return new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest();
                xhr.open("GET", url);
                xhr.onreadystatechange = () => {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                    }
                };
                xhr.send(null);
            });
        }
    };
    axios.get("./data.json").then(res => {
        console.log(res.code);
        console.log(res.message);
    });
    // 泛型的约束 用法在类型后面跟 extends 再跟一个约束的类型 来缩小类型
    function add2(a, b) {
        return a + b; // 运算符“+”不能应用于类型“T”和“T”。
    }
    add2(1, 2);
    function fn(a) {
        a.length;
    }
    fn("11");
    fn([1, 2, 3]);
    // fn(1223) // 类型“number”的参数不能赋给类型“Len”的参数
    // fn(false)
    let obj = {
        name: "小米",
        sex: "女"
    };
    // 需求: key只接收关键值
    function ob(obj, key) {
        return obj[key];
    }
    ob(obj, "name");
}
