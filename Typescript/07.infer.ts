// 1.可以在extends的条件语句中推断类型
function fun1() {
  type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : T // infer R代表待推断的返回值类型,如果T是一个函数,则返回函数的返回值,否则返回T本身

  type fun = () => number;
  type variable = string;
  type funcReturnType = MyReturnType<fun> // funcReturnType类型为number
  type varReturnType = MyReturnType<variable> // varReturnType类型为string
}
// 2.infer解包
function fun2() {
  type Ids = number[]
  type Names = string[]

  // 对T进行类型判断,如果T是Names则返回类型为string;如果T是Ids则返回类型为number
  type Unpacked<T> = T extends Names ? string : T extends Ids ? number : T

  type idType = Unpacked<Ids> // idType类型为number
  type nameType = Unpacked<Names> // nameType类型为string 

  // 如果T是某个代推断类型的数组,则返回推断的类型,否则返回T
  type Unpacked_<T> = T extends (infer R)[] ? R : T
  type idType_ = Unpacked_<Ids> // idType_类型为number
  type nameType_ = Unpacked_<Names> // nameType_类型为string 

  // 递归使用
  type MyResponse = Promise<Promise<Promise<number>>>;
  type Unpacked2<T> = T extends Promise<infer R> ? Unpacked2<R> : T; // 递归
  type resType = Unpacked2<MyResponse>; // resType 类型为number
}
// 3.推断模版字符串
function fun3() {
  type World = "world"
  type Greeting = `hello ${World}` // "hello world"

  // 数组转成字符串
  type NumberToString<T extends number> = `${T}`
  type Value = NumberToString<5> // "5"

  type PickValue<T> = T extends `${infer R}%` ? R : unknown
  type Value2 = PickValue<"50%"> // "50"
  // 去除左侧空格
  type TrimLeft<T extends string> = T extends ` ${infer R}` ? TrimLeft<R> : T
  type Value3 = TrimLeft<"     value"> // "value"
}
// 4.推断联合类型
function fun4() {
  type Foo<T> = T extends { a: infer U; b: infer U } ? U : never;

  type T10 = Foo<{ a: string; b: string }>; // T10类型为 string
  type T11 = Foo<{ a: string; b: number }>; // T11类型为 string | number

  type ElementOf<T> = T extends (infer R)[] ? R : never;

  type TTuple = [string, number];
  type Union = ElementOf<TTuple>; // Union 类型为 string | number
}
// 5.遍历数组
function fun5() {
  type ReverseArray<T extends unknown[]> = T extends [infer First, ...infer Rest] ? [...ReverseArray<Rest>, First] : T

  type Value = ReverseArray<[1, 2, 3, 4, 5]> // [5,4,3,2,1]
}