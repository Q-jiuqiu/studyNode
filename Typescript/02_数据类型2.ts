// 元组类型
function fun1() {
  // 数组的变种 不同之处在于:数组长度不固定 元组长度固定,并且类型可以不同
  // let arr: any[] = [1, false]
  let arr: [number, boolean] = [1, false]
  // let arr: readonly [number, boolean] = [1, false] // 改变值和数组长度是被禁止的

  arr[0] = 66
  // arr[0] = "stirng" 不能将类型“string”分配给类型“number”。

  arr.push(2) // 只能插入数字或者布尔值,因为数组被判断为数值和布尔值的联合类型

  // arr[2] // 报错 长度为 "2" 的元组类型 "[number, boolean]" 在索引 "2" 处没有元素. 即使push了一个参数但是任然出现元组越界的情况

  let arr2: readonly [x: number, y?: boolean] = [1]

  // 元组与type类型别名的用法
  // type first = arr[0] // 报错 “arr”表示值，但在此处用作类型
  type first = typeof arr[0]
  type length = typeof arr["length"]


  // 多维数组的定义
  let excel: [string, string, number][] = [
    ["小满", "女", 1],
    ["小满", "女", 1]
  ]
}

// 枚举类型
function fun2() {
  // 关键字 enum
  // 1.数字枚举
  enum Color {
    red, // 默认从0开始
    green,
    blue
  }
  console.log(Color.red); // 0
  console.log(Color.green); // 1
  console.log(Color.blue); // 2
  console.log("====");

  // 2.增加枚举
  enum Color1 {
    red = 1, // 从1开始
    green,
    blue
  }
  console.log(Color1.red); // 1
  console.log(Color1.green); // 2
  console.log(Color1.blue); // 3
  console.log("====");

  // 3.自定义枚举
  enum Color2 {
    red = 1, // 从1开始
    green = 4,
    blue = 5
  }
  console.log(Color2.red); // 1
  console.log(Color2.green); // 4
  console.log(Color2.blue); // 5
  console.log("====");

  // 4.字符串枚举 每个枚举值都要赋值 因为字符串枚举没有自增长的行为
  enum Color3 {
    red = "red",
    green = "green",
    blue = "blue"
  }
  console.log(Color3.red); // red
  console.log(Color3.green); // green
  console.log(Color3.blue); // blue
  console.log("====");

  // 5.异构枚举
  enum Color4 {
    yes = 1,
    no = "no"
  }
  console.log(Color4.yes); // 1
  console.log(Color4.no); // no
  console.log("====");

  // 6.接口枚举
  interface A {
    red: Color.red
  }
  let obj: A = {
    // red: 1
    red: Color.red
  }

  // 7.const枚举
  // var enum Types {
  //   success,
  //   fail
  // } // 报错 “enum”不得用作变量声明名称
  // let enum Types {
  //   success,
  //   fail
  // } // 报错 此位置不允许使用变量声明
  // 使用const 定义后在编译成js时Types不会被编译成一个对象
  const enum Types {
    success,
    fail
  }
  let code: number = 0
  if (code === Types.success) { }

  enum Types1 {
    success,
    fail
  }
  let code1: number = 0
  if (code1 === Types1.success) { }

  // 8.反向映射 可以通过key来读取value 也可以通过value来读取key 前提是不能使用const来修饰 字符串枚举是没办法进行反射的
  enum Types2 {
    success,
    fail
  }

  let success: number = Types2.success
  let key = Types2[success]
  console.log("key:", key, "-value:", success); // 0
}

// 类型推论、类型别名
function fun3() {
  // 类型推论: 在定义变量时没有明确指出变量类型,ts会通过复制推断出一个类型
  let num = 1 // let num: number
  // num = "sti" // 报错 不能将类型“string”分配给类型“number”。

  // 当定义了值但是没有赋值时,默认推断为any
  let str
  str = null
  str = 12

  // 类型别名
  type s = string | number
  let name: string = "QL"
  let name1: s = "QL"
  type obj = {}
  type arr = number[]
  type s1 = number & B
  // 与interface类似

  // type 
  // 1.不能继承,只能使用交叉类型&来达到类似的效果
  // 2.可以写联合类型 |
  // 3.不能重名
  // interface 
  // 1.可以继承
  // 2.不能写联合类型
  // 3.可以重名,重名去并集
  interface A extends B {

  }
  interface B {

  }

  // type 的高级用法
  type num = 1 extends number ? 1 : 0 // 返回1 extends是包含的意思->左边的值会作为右边类型的子类型 1是包含在number里的为true
  type num1 = 1 extends any ? 1 : 0 // 返回1 
  type num2 = 1 extends unknown ? 1 : 0 // 返回1 
  type num3 = 1 extends Object ? 1 : 0 // 返回1 
  type num4 = 1 extends Number ? 1 : 0 // 返回1 
  type num5 = 1 extends never ? 1 : 0 // 返回0
  // 为什么num1到num4都为1,而num5为0. 这与类型的包含关系有关
}

// never类型
function fun4() {
  // 通常表示不存在的状态
  type A = string & number // 将A推断为never类型 因为一个值的类型不可能既属于string又属于number,所以被推断为了never
  function xm(): never {
    throw new Error("小米")
  }

  type B = void | number | never // 将B判断为type B = number | void 因为never数据数据级别的最底层,会被直接忽略掉的

  type C = "唱" | "跳" | "rap"

  function kun(value: C) {
    switch (value) {
      case "唱":
        break;
      case "跳":
        break;
      case "rap":
        break
      default:
        // 兜底逻辑
        const error: never = value
        break
    }
  }
}

// Symbol
function fun5() {
  // 1.Symbol定义唯一值
  let a1: symbol = Symbol(1)
  let a2: symbol = Symbol(1)
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
  }
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
    yield Promise.resolve("小满") // yield后跟同步或异步
    yield "大满" // yield后跟同步或异步
    yield "超大满" // yield后跟同步或异步
    yield "无敌大满" // yield后跟同步或异步
  }

  const man = gen()
  console.log(man.next()); // { value: Promise { '小满' }, done: false }
  console.log(man.next()); // { value: 大满, done: false }
  console.log(man.next()); // { value: 超大满, done: false }
  console.log(man.next()); // { value: 无敌大满, done: false }
  console.log(man.next()); // { value: undefined, done: true } done为true表示没有东西可以迭代了

  // 5.迭代器 symbol.
  // map、set、weakMap、weakSet
  let set: Set<number> = new Set([1, 2, 2, 3, 3]) // 天然去重的 1,2,3 只支持数字和字符串,对象不支持去重
  let map: Map<any, any> = new Map()
  let Arr = [1, 2, 3]
  map.set(Arr, "小满")
  console.log(map.get(Arr)); // 输出->小满
  function args() {
    console.log(arguments); // 伪数组
  }
  // let list = document.querySelectorAll("div") // 伪数组或者类数组 也是具有迭代器的

  const each = (value: any) => {
    let It: any = value[Symbol.iterator]() // 与生成器一样具有next方法,并且通过next方法进行"遍历",返回一个对象->{value:xxx,done:false/true}
    let next: any = { done: false }
    while (!next.done) {
      next = It.next()
      console.log(next.value);
    }
  }
  each(map) // [ [ 1, 2, 3 ], '小满' ] undefined // key为[ 1, 2, 3 ],value为'小满'
  each(set) // 1 2 3 undefined
  // 6.迭代器的语法糖 ->for of ->底层实现逻辑为each函数
  // 特别注意for of 对象不可用 因为对象上没有迭代器Symbol.iterator方法
  for (const iterator of set) {
    console.log(iterator);
  }
  // 7.解构
  let [a, b, c] = [4, 5, 6]
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
            }
          } else {
            return {
              value: this.current++,
              done: false
            }
          }
        }
      }
    }
  }
  for (let value of obj1) {
    console.log(value); //输出 0,1,2,3,4
  }
  // 数组解构
  let x = [...obj1]
  console.log(x); // 输出结果为: [0,1,2,3,4]
  // 对象解构
  let y = { ...obj1 }
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
  function Fun1(a: number, b: number): Array<number> {
    return [a, b]
  }
  function Fun2(a: string, b: string): Array<string> {
    return [a, b]
  }
  // Fun1与Fun2代码逻辑相同,传参和返回都类似,重复书写  -->泛型就是为了解决这一问题
  function Fun<T>(a: T, b: T): Array<T> {
    return [a, b]
  }
  Fun(1, 2) // 此时T的动态类型为number
  // Fun(1, "1") // 类型“string”的参数不能赋给类型“number”的参数。 T不能即使number又是string
  Fun("1", "1") // 此时T的动态类型为string


  // 泛型的用法
  // 1.type和interface使用泛型
  type A<T> = string | number | T
  let a: A<boolean> = true // 相当于 type A<T> = string | number | boolean
  let a1: A<undefined> = undefined
  let a2: A<null> = null

  interface Data<T> {
    msg: T
    name: string
  }
  let data: Data<string> = {
    msg: "1111",
    name: "222"
  }

  // 泛型的高级用法
  function add<T, K>(a: T, b: K): Array<T | K> {
    return [a, b]
  }
  add(1, false) // T为number K为boolean
  // 泛型也可有默认值
  function add1<T = number, K = boolean>(a: T, b: K): Array<T | K> {
    return [a, b]
  }
  add1(1, "false") // T为number K为string

  const axios = {
    get<T>(url: string): Promise<T> {
      return new Promise((resolve, reject) => {
        let xhr: XMLHttpRequest = new XMLHttpRequest()
        xhr.open("GET", url)
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText))
          }
        }
        xhr.send(null)
      })
    }
  }

  interface resultData {
    message: string
    code: string
  }

  axios.get<resultData>("./data.json").then(res => {
    console.log(res.code);
    console.log(res.message);
  })

  // 泛型的约束 用法在类型后面跟 extends 再跟一个约束的类型 来缩小类型
  function add2<T extends number>(a: T, b: T) { // T被约束为number类型
    return a + b // 运算符“+”不能应用于类型“T”和“T”。
  }
  add2(1, 2)

  interface Len {
    length: number
  }
  function fn<T extends Len>(a: T) {
    a.length
  }
  fn("11")
  fn([1, 2, 3])
  // fn(1223) // 类型“number”的参数不能赋给类型“Len”的参数
  // fn(false)

  let obj = {
    name: "小米",
    sex: "女"
  }

  // keyof 将对象的key推断成联合类型 keyof 后跟类型 泛型必须为对象
  type Key = keyof typeof obj

  // 需求: key只接收关键值
  function ob<T extends object, K extends keyof T>(obj: T, key: K) {
    return obj[key]
  }

  ob(obj, "name")
  // ob(obj, "age") // 类型“"age"”的参数不能赋给类型“"name" | "sex"”的参数

  // keyof高级用法
  interface People {
    name: string
    age: number
    sex: string
  }
  // 需求:将People的key变成可选值
  // for in  for(let key in obj)
  type Options<T extends object> = {
    [Key in keyof T]?: T[Key]
  }

  type B = Options<People>
}