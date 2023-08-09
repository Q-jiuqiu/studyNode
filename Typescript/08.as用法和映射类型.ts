/*
 * @Author: quling
 * @Date: 2023-08-03 14:09:53
 * @LastEditors: quling
 * @LastEditTime: 2023-08-04 15:27:43
 * @Description: 
 * @FilePath: \studyNode\Typescript\08.as用法和映射类型.ts
 */
// 1.类型断言
function fun1() {
  const el = document.getElementById("test") // el类型为HTMLElement 或者 null
  const el1 = document.getElementById("test") as HTMLElement // 断言为HTMLElement
}
// 2.映射类型(重映射)
function fun1() {
  // 映射类型语法:
  // {[P in K] : T}
  type Person3 = {
    [P in "name" | "age"]: string
  }
  // 等价于
  // type Person3 = {
  //   name: string
  //   age: string
  // }

  // 重映射语法:
  // type MappedTypeWithNewKeys<T> = {
  //   [K in keyof T as NewKeyType]: T[K]
  // }
  // 实例1：
  type Getters<T> = {
    [K in keyof T as "我是重映射后的键值"]: T[K]
  }
  interface Person {
    name: string
    age: number
    1: number
    hobbies: string[]
  }
  type LazyPerson = Getters<Person>
  // 等价于
  // type LazyPerson = {
  //   我是重映射后的键值: string | number | string[];
  // }
  type changeToFn<T> = {
    // & 交集; string & K 表示 只取类型为string的K
    [K in keyof T as `get${string & K}`]: () => T[K]
  }
  type personFn = changeToFn<Person>
  // 等价于
  // type personFn = {
  //   getname: () => string;
  //   getage: () => number;
  //   gethobbies: () => string[];
  // }
  // 实例2：重映射的剥离作用
  type RemoveKey<T, K> = {
    [P in keyof T as Exclude<P, K>]: T[P]
  }
  type Person2 = RemoveKey<Person, "name">
  // 等价于
  // type Person2 = {
  //   age: number;
  //   1: number;
  //   hobbies: string[];
  // }
}