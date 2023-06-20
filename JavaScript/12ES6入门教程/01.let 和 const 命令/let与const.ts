/*
 * @Author: quling
 * @Date: 2023-06-19 11:18:21
 * @LastEditors: quling
 * @LastEditTime: 2023-06-19 15:19:10
 * @Description: let 与 const命令
 * @FilePath: \studyNode\JavaScript\12ES6入门教程\01.let 和 const 命令\let与const.ts
 */
for (let i = 0; i < 3; i++) {
  let i = 'abc'
  console.log(i);
}

var a: Array<Function> = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
  // function nameFun() {

  // }
}
a[6](); // 10
// console.log(globalThis); // 全局变量

function nameFun(params: string): void {
  var params = "xxxx" // 不报错,说明nameFun(params: string)的params是用var声明的
  // let params = "xxxx"; // 报错:标识符“params”重复
  console.log(params)
}
nameFun("22")

// console.log(params); // 报错:找不到名称“params”。 说明nameFun(params: string)的params不是哟个var声明的
