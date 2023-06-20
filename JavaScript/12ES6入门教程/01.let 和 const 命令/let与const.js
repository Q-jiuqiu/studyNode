/*
 * @Author: quling
 * @Date: 2023-06-19 11:18:21
 * @LastEditors: quling
 * @LastEditTime: 2023-06-19 14:22:43
 * @Description: let 与 const命令
 * @FilePath: \studyNode\JavaScript\12ES6入门教程\01.let 和 const 命令\let与const.js
 */
for (var i_1 = 0; i_1 < 3; i_1++) {
    var i_2 = 'abc';
    console.log(i_2);
}
var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
    // function nameFun() {
    // }
}
a[6](); // 10
console.log(globalThis); // 全局变量
function nameFun(params) {
    // let params = "xxxx";
    console.log(params);
}
nameFun("22");
