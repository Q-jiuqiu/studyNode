/*
 * @Author: quling
 * @Date: 2022-09-06 13:47:39
 * @LastEditors: quling
 * @LastEditTime: 2022-09-17 18:22:04
 * @Description: 
 */
// 原语 string、number、boolean（首字母大写也可以）
function Part1() {
  let a: string = "1"
  a = "3"
  // a = 2 报错:不能将类型“number”分配给类型“string”。
  let b: number = 2
  let c: boolean = true
}

// 数组
function Part2() {
  let arr1: Array<string> = ["1", "2"] // 或者写为:string[] = ["1", "2"] 全为字符串的数组,不限制长度
  let arr2: Array<number> = [1, 2, 3] // 或者写为: number[] = [1, 2, 3] 全为数值的数组,不限制长度
  // any 当一个变量不想被任何类型校验时可以使用他,"any也就是他是任意类型"
  let d: any = { x: 1 }
  d = 1 // 不会报检验类型错误的错
  d()
  // noImplicitAny: true
  // function f1(x) { // 参数“x”隐式具有“any”类型。
  //   console.log(x);
  // }
  // 函数:参数类型注释、函数返回值注释  --> 解释为:调用函数时输入参数有且只有一个,并且类型为字符串,返回函数时必须有返回并且返回类型必须为数值
  function f2(params: string): number {
    // return params*1 算术运算左侧必须是 "any"、"number"、"bigint" 或枚举类型
    console.log(params);
    return 1;
  }
  // f2("test",1) 算术运算左侧必须是 "any"、"number"、"bigint" 或枚举类型
  f2("test")
}

// 匿名函数 匿名函数与函数声明有点不同。当一个函数出现在 TypeScript 可以确定如何调用它的地方时，该函数的参数会自动被赋予类型  上下文类型 -> 通过上下文可以判读item是string类型,故可以不对item进行类型注释
function Part3() {
  const arr = ["Alice", "Bob", "Eve"]
  arr.forEach(item => {
    item.toLocaleLowerCase()
    // item * 1 报错 算术运算左侧必须是 "any"、"number"、"bigint" 或枚举类型。
  })
}

// 对象
function Part4() {
  function f3(pt: { x: number, y: number }) {
    console.log(pt.x, pt.y);
    // console.log(pt.z); 类型“{ x: number; y: number; }”上不存在属性“z”
  }
  f3({ x: 1, y: 2 })
  // f3({ x: "1", y: 1 }) 不能将类型“string”分配给类型“number”
  // f3({ x: 1 }) 缺少属性 "y"
  // 可选属性
  function f4(pt: { x: string, y?: string }) {
    // console.log(pt.y.toLocaleLowerCase()); y属性可能为undefined
    if (pt.y !== undefined) {
      console.log(pt.y.toLocaleLowerCase());
    }
    console.log(pt.y?.toLocaleLowerCase()); // 也相当于先判断一下pt.y是否为undefined
  }
  f4({ x: "test" }) // 没有y属性但是没有报错,因为y为可选属性,可传可不传

}

// 联合类型: 有两种或多种类型组成的
function Part5() {
  function f5(id: number | string) {
    console.log("ID is ", id);
    // console.log(id.toLocaleLowerCase()); 报错  如果id是“number”类型将无toLocaleLowerCase方法,只能调用数值和字符串共有的方法
    console.log(id.toString()); // 不会报错 因为number和string都有toSting方法
    // 或者
    if (typeof id === "string") { // 此处id只可能是string或者number类型
      console.log(id.toLocaleLowerCase());
    } else {
      console.log(id + 2);
    }
  }
  f5(1)
  f5("1")
  // f5({ x: 1}) 不是数值或者字符串
}

// 类型别名
function Part6() {
  type Point = {
    x: number,
    y?: number // 可选属性
  }
  function f1(pt: Point) {
    console.log(pt.x, pt.y);
  }
  f1({ x: 1, y: 2 })
  f1({ x: 1 })
  // 不可重复 报错:标识符“Point”重复
  // type Point = {
  //   x: number,
  //   y: number,
  //   z: number
  // }
  // 类型扩展  --> 使用交叉扩展
  type NewPoint = Point & {
    z: number
  }

  // 别名只是别名,不会改变原始类型
  type myString = string
  function f2(param1: string): myString {
    return param1
  }
}

// 接口
function Part7() {
  interface Point {
    x: number,
    y: number,
    readonly name: string // 只读属性,只读属性也可以设为可选属性
  }
  function f1(pt: Point) {
    console.log(pt.x, pt.y);
    // pt.name = "Jek" 无法分配到 "name" ，因为它是只读属性
  }
  f1({ x: 1, y: 2, name: "Mike" })
  // interface Point{
  //   x: number,
  //   y: string, // 后续属性声明必须属于同一类型。属性“y”的类型必须为“number”，但此处却为类型“string”
  // }
}

// 类型别名和接口的比较--相同点
function Part8_1() {
  // 1.都可以描述Object和Function
  // Object
  type Point1 = {
    x: number,
    y: number
  }
  interface Point2 {
    x: number,
    y: number
  }
  // Function 返回空
  type setPoint1 = (x: number, y: number) => void
  interface setPoint2 {
    (x: number, y: number): void
  }

  // 2.都可被继承 还可以相互继承
  type Z = {
    z: number
  }
  // A.type是通过交叉点扩展类型   newPoint1_x 具有x,y,z属性
  // a.type解除type
  type newPoint1_1 = Point1 & Z
  // b.type继承interface
  type newPoint1_2 = Point1 & Point2
  // B.interface是扩展接口  newPoint2_x 具有x,y,z属性
  // c.interface继承interface
  interface newPoint2_1 extends Point2 {
    z: number
  }
  // d.interface继承type
  interface newPoint2_2 extends Point1 {
    z: number
  }

  // 3.实现implements
  // a.类可以实现interface 以及 type(除联合类型外)
  interface ICat1 {
    setName(name: string): void;
  }
  class Cat1 implements ICat1 {
    setName(name: string): void {
      // todo
    }
  }
  // type  
  type ICat2 = {
    setName(name: string): void;
  }
  class Cat2 implements ICat2 {
    setName(name: string): void {
      // todo
    }
  }
  // 类无法实现联合类型, 是什么意思呢
  //   type Person = { name: string; } | { setName(name:string): void };
  // // 无法对联合类型Person进行实现
  // // error: A class can only implement an object type or intersection of object types with statically known members.
  // class Student implements Person { 类只能实现具有静态已知成员的对象类型或对象类型的交集
  //   name= "张三";
  //   setName(name:string):void{
  //         // todo
  //     }
  // }
}
// 类型别名和接口的比较--不同点
function Part8_2() {
  // 1. 定义基本类型别名 type可以定义基本类型别名, 但是interface无法定义
  // 2. 声明联合类型 type可以声明联合类型
  // 3. 声明元组 type可以声明 元组类型 
  type Data = [number, string];
  // 4. 声明合并: 多次声明同一个interface,interface会合并视为一个接口,而interface则不行
  interface Person {
    name: string
  }
  interface Person {
    age: number,
    // name: number // 后续属性声明必须属于同一类型。属性“name”的类型必须为“string”，但此处却为类型“number”
  }
  //  此时Person接口同时具有name和age两个属性,但是不能改变之前属性的类型
  const user: Person = {
    name: 'Mike',
    age: 13
  }

  type Person1 = {
    name: String
  }
  // 报错：标识符“Person1”重复
  // type Person1 = { // 标识符“Person1”重复
  //   ag: Number
  // }
}

// 类型断言 与类型注释一样，类型断言被编译器删除，不会影响代码的运行时行为
function Part9() {
  const myCanvas = document.getElementById("canvas") as HTMLCanvasElement;
  const myCanvas1 = <HTMLCanvasElement>document.getElementById('canvas')
}

// 文字类型
function Part10() {
  let changingString = 'hello world'
  changingString = 'test';
  changingString;

  const changingString1 = 'hello world'
  changingString1;

  let x: "hello" = "hello"; // 创建一个x变量,他只接收字面量为hello的变量
  x = "hello";
  // x = "howdy"; // 报错:不能将类型"howdy"分配给类型"hello"

  function printText(s: string, alignment: "left" | "right" | "center") {
    // ...
  }
  printText("Hello, world", "left");
  // printText("G'day, mate", "centre"); // 报错类型“"centre"”的参数不能赋给类型“"left" | "right" | "center"”的参数

  // 返回数字类型的数据 返回的值可能是:-1、0、1
  function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
  }
}

// 字面推理
function Part11() {
  const obj = {
    counter: 0
  }
  const someCondition = {}
  if (someCondition) {
    obj.counter = 1 // counter的初始值为0,就是为了给counter的类型赋予number,因为类型用于确定读取和写入行为,那么此处才可以给counter赋值为1
  }
  function iTakeFoo(foo: 'foo') { }
  const test = {
    someProp: 'foo' // 推理someProp的类型为string
  };

  // iTakeFoo(test.someProp); // 报错:类型“string”的参数不能赋给类型“"foo"”的参数

  // 解决1:
  iTakeFoo(test.someProp as 'foo');
  // 解决2:
  type Test = {
    someProp: 'foo'
  }
  const test1: Test = {
    // someProp:'test' // 报错:不能将类型“"test"”分配给类型“"foo"”
    someProp: 'foo'
  }
  iTakeFoo(test1.someProp);
}

// null 和 undefined
function Part12() {
  // strictNullChecks 为 true 需要事先判断值是否非空
  function doSomething(x: string | null) {
    if (x === null) {
      // do nothing
    } else {
      console.log("Hello, " + x.toUpperCase());
    }
  }
}

// 非空断言运行符 (后缀!)
function Part13() {
  function doSomething(x: string | null) {
    console.log("Hello, " + x!.toUpperCase());
  }
}

// 枚举
function Part14() {
  // 不常见的原语
  // 1.bigint:用于非常大的整数
  const oneHundred: bigint = BigInt(100)
  // 2.symbol:用于通过函数创建全局唯一引用Symbol()
  const firstName = Symbol('name')
  const SecondName = Symbol('name')
  // 报错:此条件将始终返回 "false"，因为类型 "typeof firstName" 和 "typeof SecondName" 没有重叠
  // if (firstName === SecondName) {
  //   console.log("1");
  // }
  
}

