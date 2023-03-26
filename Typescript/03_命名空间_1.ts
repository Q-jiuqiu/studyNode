// let a = 1 // 无法重新声明块范围变量“a”

import { B } from "./03_命名空间"
namespace A {
  export const a = 2
}

console.log(A.a, B.C.a);
