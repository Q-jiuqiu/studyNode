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