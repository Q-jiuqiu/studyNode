// 如果包含import或者export文件会被当成一个模块，如果一个文件不带用import或者export的申明，那么它的内容将被食物全局可见的（因此对模块也是可见的）
let a = 1 // 在此文件中创建的变量a是全局的,也就是其他文件中若也创建了a变量那么就会有重名报错的问题

// 解决办法一
export default a // 如果使用了export就不会和其他文件内的同名参数冲突

// 解决办法二
namespace A {
  export const a = 1 // 必须使用export否则属性a不会被导出
}
// 原理
// let A_;
// (function (A_) {
//   A_.a = 1
// })(A_ || (A_ = {}))

console.log(A.a, "-"); // A 相当于一个包含了属性名为a的对象

// 命名空间的使用
// 嵌套命名空间
export namespace B { // 抽离命名空间 导出,在其他文件中引用
  export namespace C {
    export const a = 1
  }
}
// 简化命名-别名
import AAA = B.C
console.log(B.C.a, "=", AAA.a);

// 重名相当于合并 如果重名的命名空间被导出,如重名的命名空间为B 那么此处的重名命名空间B也要使用export导出
namespace A {
  export const d = "string"
}
console.log(A.d);


